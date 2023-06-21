import { useRepo } from 'pinia-orm';
import api from '../apiService/apiService';
import Episode from 'src/stores/models/episode/Episode';

const episode = useRepo(Episode);

export default {
  // Axios API call
  async post(params: string) {
    const resp = await api().post('episode', params);
    episode.save(resp.data);
  },
  get(offset: number) {
    if (offset >= 0) {
      return api()
        .get('episode?offset=' + offset + '&max=100')
        .then((resp) => {
          episode.save(resp.data);
          offset = offset + 100;
          if (resp.data.length > 0) {
            this.get(offset);
          }
        });
    }
  },
  async patch(id: number, params: string) {
    const resp = await api().patch('episode/' + id, params);
    console.log('o que manda', params);
    console.log('update', resp.data);
    episode.save(resp.data);
  },
  async delete(id: number) {
    await api().delete('episode/' + id);
    episode.destroy(id);
  },

  async apiSave(episodeParams: any, isNew: boolean) {
    if (isNew) {
      return await this.post(episodeParams);
    } else {
      return await this.patch(episodeParams.id, episodeParams);
    }
  },

  async apiUpdate(episodeParams: any) {
    return await api().patch('/episode/' + episodeParams.id, episodeParams);
  },

  async apiRemove(episodeParams: any) {
    return await api().delete(`/episode/${episodeParams.id}`);
  },

  async apiGetAllByClinicId(clinicId: string, offset: number, max: number) {
    return await api().get(
      '/episode/clinic/' + clinicId + '?offset=' + offset + '&max=' + max
    );
  },

  async apiFetchById(id: string) {
    return await api().get(`/episode/${id}`);
  },

  async apiGetAllByIdentifierId(
    identifierId: string,
    offset: number,
    max: number
  ) {
    return await api()
      .get(
        '/episode/identifier/' +
          identifierId +
          '?offset=' +
          offset +
          '&max=' +
          max
      )
      .then((resp) => {
        episode.save(resp.data);
        return resp;
      });
  },
  // Local Storage Pinia
  newInstanceEntity() {
    return episode.getModel().$newInstance();
  },
  getAllFromStorage() {
    return episode.all();
  },
  getEntity() {
    return episode.getModel();
  },
  lastEpisodeByIdentifier(identifierId: string) {
    return episode
      .withAllRecursive(2)
      .where('patientServiceIdentifier_id', identifierId)
      .orderBy('episodeDate', 'desc')
      .first();
  },
  getlast3EpisodesByIdentifier(identifierId: string) {
    const episodes = episode
      .withAllRecursive(2)
      .where('patientServiceIdentifier_id', identifierId)
      .orderBy('episodeDate', 'desc')
      .limit(3)
      .get();
    if (episodes.length > 0) {
      episodes[0].isLast = true;
    }
    return episodes;
  },
  getEpisodeById(id: string) {
    return episode
      .withAllRecursive(2)
      .where('id', id)
      .orderBy('episodeDate', 'desc')
      .first();
  },

  /*
  lastEpisode() {
    return Episode.query()
    .with('startStopReason')
    .with('episodeType')
    .with('patientServiceIdentifier')
    .with('clinicSector.*')
    .where('patientServiceIdentifier_id', identifier.id)
    .orderBy('episodeDate', 'desc')
    .first()
  }
  */

  getStartEpisodeByIdentifierId(identifierId: string) {
    return episode
      .query()
      .with('startStopReason')
      .with('clinicSector')
      .with('patientServiceIdentifier')
      .with('patientVisitDetails', (query) => {
        query.withAllRecursive(2);
      })
      .has('patientVisitDetails')
      .whereHas('episodeType', (query) => {
        query.where('code', 'INICIO');
      })
      .where('patientServiceIdentifier_id', identifierId)
      .orderBy('creationDate', 'desc')
      .get();
  },
  
  getLastStartEpisodeWithPrescription(patientIdentifierid: string) {
    return episode
      .withAllRecursive(2)
      .whereHas('episodeType', (query) => {
        query.where('code', 'INICIO');
      })
      .has('patientVisitDetails')
      .where('patientServiceIdentifier_id', patientIdentifierid)
      .orderBy('episodeDate', 'desc')
      .first();
  },
  getLastStopEpisodeByIdentifier(identifierId: string) {
    return episode
      .with('startStopReason')
      .whereHas('episodeType', (query) => {
        query.where('code', 'FIM');
      })
      .where('patientServiceIdentifier_id', identifierId)
      .orderBy('episodeDate', 'desc')
      .first();
  },
  getLastStartEpisodeByIdentifier(identifierId: string) {
    return episode
      .withAllRecursive(1)
      .where('patientServiceIdentifier_id', identifierId)
      .whereHas('episodeType', (query) => {
        query.where('code', 'INICIO');
      })
      .orderBy('episodeDate', 'desc')
      .first();
  },
};
