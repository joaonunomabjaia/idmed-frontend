import { useRepo } from 'pinia-orm';
import api from '../apiService/apiService';
import GroupMember from 'src/stores/models/groupMember/GroupMember';
import { useSwal } from 'src/composables/shared/dialog/dialog';
import { useSystemUtils } from 'src/composables/shared/systemUtils/systemUtils';
import { nSQL } from 'nano-sql';
import Group from 'src/stores/models/group/Group';
import groupService from '../group/groupService';

const { website, isDeskTop, isMobile } = useSystemUtils();
const groupMember = useRepo(GroupMember);

export default {
  // Axios API call
  post(params: string) {
    return api()
      .post('groupMember', params)
      .then((resp) => {
        groupMember.save(resp.data);
      });
  },
  get(offset: number) {
    if (offset >= 0) {
      return api()
        .get('groupMember?offset=' + offset + '&max=100')
        .then((resp) => {
          groupMember.save(resp.data);
          offset = offset + 100;
          if (resp.data.length > 0) {
            this.get(offset);
          }
        });
    }
  },
  patch(id: number, params: string) {
    return api()
      .patch('groupMember/' + id, params)
      .then((resp) => {
        groupMember.save(resp.data);
      });
  },
  delete(id: number) {
    return api()
      .delete('groupMember/' + id)
      .then(() => {
        groupMember.destroy(id);
      });
  },
  async apiUpdate(member: any) {
    if (isMobile.value) {
      const group = groupService.getGroupWithsById(member.group_id);
      console.log(group);
      const memberToRemove = group.members.filter((memberParam: any) => {
        return memberParam.id === member.id;
      });
      const memberToRemoveIndex = group.members.findIndex(
        (memberParam: any) => {
          return memberParam.id === member.id;
        }
      );
      console.log(memberToRemove);
      console.log(memberToRemoveIndex);
      group.members.splice(memberToRemoveIndex, 1, member);
      group.members.forEach((member) => {
        const memberPatientId = member.patient.id;
        member.patient = {};
        member.clinic = {};
        member.group = {};
        member.patient.id = memberPatientId;
        member.patient_id = memberPatientId;
        member.clinic_id = group.clinic.id;
        member.clinic.id = group.clinic.id;
        member.group.id = group.id;
        member.syncStatus = 'R';
      });
      groupMember.save(member);
      groupService.apiUpdate(group);
    } else {
      return await api()
        .patch('/groupMember/' + member.id, member)
        .then((resp) => {
          groupMember.save(resp.data);
        });
    }
  },
  // Local Storage Pinia
  newInstanceEntity() {
    return groupMember.getModel().$newInstance();
  },
  getAllFromStorage() {
    return groupMember.withAll().all();
  },
};
