
import { useRepo } from 'pinia-orm';
import ClinicalService from 'src/stores/models/ClinicalService/ClinicalService';
import api from '../apiService/apiService';
import { alert } from 'src/components/Shared/Dialog/Dialog';

const clinicalService = useRepo(ClinicalService);

export default {
  post(params: string) {
    return api()
      .post('clinicalService', params)
      .then((resp) => {
        clinicalService.save(resp.data);
        alert(
          'Sucesso!',
          'O Registo foi efectuado com sucesso',
          null,
          null,
          null
        );
      })
      .catch((error) => {
        if (error.request != null) {
          const arrayErrors = JSON.parse(error.request.response);
          const listErrors = [];
          if (arrayErrors.total == null) {
            listErrors.push(arrayErrors.message);
          } else {
            arrayErrors._embedded.errors.forEach((element) => {
              listErrors.push(element.message);
            });
          }
          alert('Erro no registo', listErrors, null, null, null);
        } else if (error.request) {
          alert('Erro no registo', error.request, null, null, null);
        } else {
          alert('Erro no registo', error.message, null, null, null);
        }
      });
  },
  get(offset: number) {
    if (offset >= 0) {
      return api()
        .get('clinicalService?offset=' + offset + '&limit=100')
        .then((resp) => {
          clinicalService.save(resp.data);
          offset = offset + 100;
          if (resp.data.length > 0) {
            this.get(offset);
            setTimeout(this.get, 2)
          }
        })
        .catch((error) => {
          if (error.request != null) {
            const arrayErrors = JSON.parse(error.request.response);
            const listErrors = {};
            if (arrayErrors.total == null) {
              listErrors.push(arrayErrors.message);
            } else {
              arrayErrors._embedded.errors.forEach((element) => {
                listErrors.push(element.message);
              });
            }
            alert('Erro no registo', listErrors, null, null, null);
          } else if (error.request) {
            alert('Erro no registo', error.request, null, null, null);
          } else {
            alert('Erro no registo', error.message, null, null, null);
          }
        });
    }
  },
  patch(id: number, params: string) {
    return api()
      .patch('clinicalService/' + id, params)
      .then((resp) => {
        clinicalService.save(resp.data);
        alert(
          'Sucesso!',
          'O Registo foi alterado com sucesso',
          null,
          null,
          null
        );
      })
      .catch((error) => {
        if (error.request != null) {
          const arrayErrors = JSON.parse(error.request.response);
          const listErrors = {};
          if (arrayErrors.total == null) {
            listErrors.push(arrayErrors.message);
          } else {
            arrayErrors._embedded.errors.forEach((element) => {
              listErrors.push(element.message);
            });
          }
          alert('Erro no registo', listErrors, null, null, null);
        } else if (error.request) {
          alert('Erro no registo', error.request, null, null, null);
        } else {
          alert('Erro no registo', error.message, null, null, null);
        }
      });
  },
  delete(id: number) {
    return api()
      .delete('clinicalService/' + id)
      .then(() => {
        clinicalService.destroy(id);
      });
  },
};