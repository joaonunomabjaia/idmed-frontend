import api from '../../api/apiService/apiService';
import { nSQL } from 'nano-sql';
import ClinicSector from 'src/stores/models/clinicSector/ClinicSector';
import { useRepo } from 'pinia-orm';
const clinicSector = useRepo(ClinicSector);
export default {
  async getFromBackEnd(offset: number) {
    if (offset >= 0) {
      return await api()
        .get('clinicSector?offset=' + offset + '&max=100')
        .then((resp) => {
          nSQL(ClinicSector.entity).query('upsert', resp.data).exec();
          clinicSector.save(resp.data);
          console.log('Data synced from backend: ClinicSector');
          offset = offset + 100;
          if (resp.data.length > 0) {
            this.getFromBackEnd(offset);
          }
        })
        .catch((error) => {
          console.error('Error syncing data from backend:', error);
          console.log(error);
        });
    }
  },
};
