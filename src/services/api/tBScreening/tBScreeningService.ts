import { useRepo } from 'pinia-orm';
import api from '../apiService/apiService';
import TBScreening from 'src/stores/models/screening/TBScreening';
import { nSQL } from 'nano-sql';
import { useSwal } from 'src/composables/shared/dialog/dialog';
import { useLoading } from 'src/composables/shared/loading/loading';
import { useSystemUtils } from 'src/composables/shared/systemUtils/systemUtils';

const tBScreening = useRepo(TBScreening);

const { closeLoading } = useLoading();
const { alertSucess, alertError } = useSwal();
const { isMobile, isOnline } = useSystemUtils();

export default {
  post(params: string) {
    if (isMobile.value && !isOnline.value) {
      return this.putMobile(params);
    } else {
      return this.postWeb(params);
    }
  },
  get(offset: number) {
    if (isMobile.value && !isOnline.value) {
      this.getMobile();
    } else {
      return this.getWeb(offset);
    }
  },
  patch(uid: string, params: string) {
    if (isMobile.value && !isOnline.value) {
      return this.putMobile(params);
    } else {
      return this.patchWeb(uid, params);
    }
  },
  delete(uuid: string) {
    if (isMobile.value && !isOnline.value) {
      this.deleteMobile(uuid);
    } else {
      return this.deleteWeb(uuid);
    }
  },
  // WEB
  postWeb(params: string) {
    return api()
      .post('tBScreening', params)
      .then((resp) => {
        tBScreening.save(resp.data);
      });
  },
  getWeb(offset: number) {
    if (offset >= 0) {
      return api()
        .get('tBScreening?offset=' + offset + '&max=100')
        .then((resp) => {
          tBScreening.save(resp.data);
          offset = offset + 100;
          if (resp.data.length > 0) {
            this.get(offset);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  patchWeb(uuid: string, params: string) {
    return api()
      .patch('tBScreening/' + uuid, params)
      .then((resp) => {
        tBScreening.save(resp.data);
      });
  },
  deleteWeb(uuid: string) {
    return api()
      .delete('tBScreening/' + uuid)
      .then(() => {
        tBScreening.destroy(uuid);
      });
  },
  // Mobile
  putMobile(params: string) {
    return nSQL(TBScreening.entity)
      .query('upsert', params)
      .exec()
      .then((resp) => {
        tBScreening.save(resp[0].affectedRows);
      });
  },
  getMobile() {
    return nSQL(TBScreening.entity)
      .query('select')
      .exec()
      .then((rows: any) => {
        tBScreening.save(rows);
      })
      .catch((error: any) => {
        // alertError('Aconteceu um erro inesperado nesta operação.');
        console.log(error);
      });
  },
  deleteMobile(paramsId: string) {
    return nSQL(TBScreening.entity)
      .query('delete')
      .where(['id', '=', paramsId])
      .exec()
      .then(() => {
        tBScreening.destroy(paramsId);
        alertSucess('O Registo foi removido com sucesso');
      })
      .catch((error: any) => {
        // alertError('Aconteceu um erro inesperado nesta operação.');
        console.log(error);
      });
  },
  async apiGetAll(offset: number, max: number) {
    return this.get(offset);
  },
  // Local Storage Pinia
  newInstanceEntity() {
    return tBScreening.getModel().$newInstance();
  },
  getAllFromStorage() {
    return tBScreening.all();
  },
  deleteAllFromStorage() {
    tBScreening.flush();
  },
};
