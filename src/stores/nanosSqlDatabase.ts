import ReferredPatientsReport from 'src/stores/models/report/referralManagement/ReferredPatientsReport';
import Country from './models/country/Country';
import Province from './models/province/Province';
import District from './models/district/District';
import City from './models/city/City';
import Appointment from './models/appointment/Appointment';
import AttributeType from './models/attributeType/AttributeType';
import { Clinic } from './models/clinic/Clinic';
import { ClinicSector } from './models/clinic/ClinicSector';
import Drug from './models/drug/Drug';
import Episode from './models/episode/Episode';
import EpisodeType from './models/episodeType/EpisodeType';
import FacilityType from './models/facilityType/FacilityType';
import Group from './models/group/Group';
import GroupMember from './models/groupMember/GroupMember';
import GroupType from './models/groupType/GroupType';
import IdentifierType from './models/identifierType/IdentifierType';
import NationalClinic from './models/nationalClinic/NationalClinic';
import Patient from './models/patient/Patient';
import PatientAttribute from './models/patientAttribute/PatientAttribute';
import PatientServiceIdentifier from './models/patientServiceIdentifier/PatientServiceIdentifier';
import ClinicalService from './models/ClinicalService/ClinicalService';
import StartStopReason from './models/startStopReason/StartStopReason';
import TherapeuticRegimen from './models/therapeuticRegimen/TherapeuticRegimen';
import Stock from './models/stock/Stock';
import {
  StockAdjustment,
  InventoryStockAdjustment,
  StockDestructionAdjustment,
  StockReferenceAdjustment,
} from './models/stockadjustment/StockAdjustmentHierarchy';
import StockCenter from './models/stockcenter/StockCenter';
import DestroyedStock from './models/stockdestruction/DestroyedStock';
import StockEntrance from './models/stockentrance/StockEntrance';
import Inventory from './models/stockinventory/Inventory';
import StockLevel from './models/stocklevel/StockLevel';
import StockOperationType from './models/stockoperation/StockOperationType';
import ReferedStockMoviment from './models/stockrefered/ReferedStockMoviment';
import AdherenceScreening from './models/screening/AdherenceScreening';
import PregnancyScreening from './models/screening/PregnancyScreening';
import RAMScreening from './models/screening/RAMScreening';
import VitalSignsScreening from './models/screening/VitalSignsScreening';
import TBScreening from './models/screening/TBScreening';
import Localidade from './models/Localidade/Localidade';
import PostoAdministrativo from './models/PostoAdministrativo/PostoAdministrativo';
import ClinicalServiceAttributeType from './models/ClinicalServiceAttributeType/ClinicalServiceAttributeType';
import ClinicalServiceAttribute from './models/ClinicalServiceAttribute/ClinicalServiceAttribute';
import PatientVisitDetails from './models/patientVisitDetails/PatientVisitDetails';
import Doctor from './models/doctor/Doctor';
import Form from './models/form/Form';
import TherapeuticLine from './models/therapeuticLine/TherapeuticLine';
import DispenseType from './models/dispenseType/DispenseType';
import Duration from './models/duration/Duration';
import TherapeuticRegimensDrug from './models/TherapeuticRegimensDrug/TherapeuticRegimensDrug';
import PatientVisit from './models/patientVisit/PatientVisit';
import Pack from './models/packaging/Pack';
import PackagedDrug from './models/packagedDrug/PackagedDrug';
import Prescription from './models/prescription/Prescription';
import PrescriptionDetail from './models/prescriptionDetails/PrescriptionDetail';
import PrescribedDrug from './models/prescriptionDrug/PrescribedDrug';
import HealthInformationSystem from './models/healthInformationSystem/HealthInformationSystem';
import InteroperbilityAttribute from './models/interoperabilityAttribute/InteroperabilityAttribute';
import InteroperabilityType from './models/interoperabilityType/InteroperabilityType';
import ClinicalServiceSector from './models/ClinicalServiceClinicSector/ClinicalServiceSector';
import DispenseMode from './models/dispenseMode/DispenseMode';
import PackagedDrugStock from './models/packagedDrug/PackagedDrugStock';
import GroupPackHeader from './models/group/GroupPackHeader';
import GroupPack from './models/group/GroupPack';
import Report from './models/report/Report';
import PatientTransReferenceType from './models/transreference/PatientTransReferenceType';
import PatientTransReference from './models/transreference/PatientTransReference';
import ClinicSectorType from './models/clinicSectorType/ClinicSectorType';
import SpetialPrescriptionMotive from './models/prescription/SpetialPrescriptionMotive';
import MigrationStage from './models/Migration/MigrationStage';
import ProvincialServer from './models/provincialServer/ProvincialServer';
import SystemConfigs from './models/systemConfigs/SystemConfigs';
import UserLogin from './models/userLogin/User';
import Role from './models/userLogin/Role';
import Menu from './models/userLogin/Menu';
import RoleMenu from './models/userLogin/RoleMenu';
import UserRole from './models/userLogin/UserRole';
import UserClinic from './models/userLogin/UserClinic';
import UserClinicSector from './models/userLogin/ClinicSectorUsers';
import SecUserRole from './models/userLogin/SecUserRole';
import GroupMemberPrescription from './models/group/GroupMemberPrescription';
import DrugStockFileEvent from './models/drugStockFileEvent/DrugStockFileEvent';
import DrugFile from './models/drugFile/DrugFile';
import StockAlert from './models/stockAlert/StockAlert';
//import StockReceivedReport from './models/report/stock/StockReceivedReport';
//import StockUsedReport from './models/report/stock/StockUsedReport';
//import AbsentPatientReport from './models/report/pharmacyManagement/AbsentPatientReport';
//import PatientHistoryReport from './models/report/pharmacyManagement/PatientHistoryReport';
// import MmiaStockReport from './models/report/pharmacyManagement/MmiaStockReport';
// import MmiaReport from './models/report/pharmacyManagement/MmiaReport';
// import MmiaRegimenSubReport from './models/report/pharmacyManagement/MmiaRegimenSubReport';
//import ArvDailyRegisterTempReport from './models/report/monitoring/ArvDailyRegisterTempReport';
import AuditSyncronization from './models/auditSyncronization/AuditSyncronization';
import StockReceivedReport from './models/report/stock/StockReceivedReport';
import StockUsedReport from './models/report/stock/StockUsedReport';
import patientHistoryReport from './models/report/pharmacyManagement/PatientHistoryReport';
import AbsentPatientReport from './models/report/pharmacyManagement/AbsentPatientReport';
import MmiaReport from './models/report/pharmacyManagement/MmiaReport';
import MmiaStockReport from './models/report/pharmacyManagement/MmiaStockReport';
import MmiaRegimenSubReport from './models/report/pharmacyManagement/MmiaRegimenSubReport';
import ArvDailyRegisterTempReport from './models/report/monitoring/ArvDailyRegisterTempReport';
import ActiveInDrugStoreMobileService from 'src/services/api/report/mobile/ActiveInDrugStoreMobileService';
import ActiveInDrugStore from './models/report/patient/ActiveInDrugStore';
import DrugQuantityTemp from './models/report/monitoring/DrugQuantityTemp';
import StockDistributor from './models/stockDistributor/StockDistributor';
import StockDistributorBatch from './models/stockDistributorBatch/StockDistributorBatch';
import DrugDistributor from './models/drugDistributor/DrugDistributor';
//import NonSqlDatabaseUtils from 'src/utils/NonSqlDatabaseUtils';
// import ActiveInDrugStore from 'src/store/models/report/patient/ActiveInDrugStore';

export default {
  getEntities() {
    const entitiesList = [];
    entitiesList.push(Country);
    entitiesList.push(Province);
    entitiesList.push(District);
    entitiesList.push(City);
    entitiesList.push(Appointment);
    entitiesList.push(AttributeType);
    entitiesList.push(Clinic);
    entitiesList.push(ClinicSector);
    entitiesList.push(Drug);
    entitiesList.push(Episode);
    entitiesList.push(EpisodeType);
    entitiesList.push(FacilityType);
    entitiesList.push(Group);
    entitiesList.push(GroupMember);
    entitiesList.push(GroupType);
    entitiesList.push(IdentifierType);
    entitiesList.push(NationalClinic);
    entitiesList.push(Patient);
    entitiesList.push(PatientAttribute);
    entitiesList.push(PatientServiceIdentifier);
    entitiesList.push(ClinicalService);
    entitiesList.push(StartStopReason);
    entitiesList.push(TherapeuticRegimen);
    entitiesList.push(Stock);
    entitiesList.push(StockAdjustment);
    entitiesList.push(InventoryStockAdjustment);
    entitiesList.push(StockDestructionAdjustment);
    entitiesList.push(StockReferenceAdjustment);
    entitiesList.push(StockCenter);
    entitiesList.push(DestroyedStock);
    entitiesList.push(StockEntrance);
    entitiesList.push(Inventory);
    entitiesList.push(StockLevel);
    entitiesList.push(StockOperationType);
    entitiesList.push(ReferedStockMoviment);
    entitiesList.push(AdherenceScreening);
    entitiesList.push(PregnancyScreening);
    entitiesList.push(RAMScreening);
    entitiesList.push(VitalSignsScreening);
    entitiesList.push(TBScreening);
    entitiesList.push(Localidade);
    entitiesList.push(PostoAdministrativo);
    entitiesList.push(ClinicalServiceAttributeType);
    entitiesList.push(ClinicalServiceAttribute);
    entitiesList.push(PatientVisitDetails);
    entitiesList.push(Doctor);
    entitiesList.push(Form);
    entitiesList.push(TherapeuticLine);
    entitiesList.push(DispenseType);
    entitiesList.push(DispenseMode);
    entitiesList.push(Duration);
    entitiesList.push(TherapeuticRegimensDrug);
    entitiesList.push(PatientVisit);
    entitiesList.push(Pack);
    entitiesList.push(PackagedDrug);
    entitiesList.push(Prescription);
    entitiesList.push(PrescriptionDetail);
    entitiesList.push(PrescribedDrug);
    entitiesList.push(HealthInformationSystem);
    entitiesList.push(InteroperbilityAttribute);
    entitiesList.push(InteroperabilityType);
    entitiesList.push(ClinicalServiceSector);
    entitiesList.push(PackagedDrugStock);
    entitiesList.push(GroupPackHeader);
    entitiesList.push(GroupPack);
    entitiesList.push(Report);
    entitiesList.push(PatientTransReferenceType);
    entitiesList.push(PatientTransReference);
    entitiesList.push(ClinicSectorType);
    entitiesList.push(SpetialPrescriptionMotive);
    entitiesList.push(MigrationStage);
    entitiesList.push(ProvincialServer);
    entitiesList.push(SystemConfigs);
    entitiesList.push(UserLogin);
    entitiesList.push(Role);
    entitiesList.push(Menu);
    entitiesList.push(RoleMenu);
    entitiesList.push(UserRole);
    entitiesList.push(UserClinic);
    entitiesList.push(UserClinicSector);
    entitiesList.push(SecUserRole);
    entitiesList.push(GroupMemberPrescription);
    entitiesList.push(DrugStockFileEvent);
    entitiesList.push(DrugFile);
    entitiesList.push(StockAlert);
    entitiesList.push(StockReceivedReport);
    entitiesList.push(StockUsedReport);
    entitiesList.push(patientHistoryReport);
    entitiesList.push(AuditSyncronization);
    entitiesList.push(AbsentPatientReport);
    entitiesList.push(MmiaReport);
    entitiesList.push(MmiaStockReport);
    entitiesList.push(MmiaRegimenSubReport);
    entitiesList.push(ArvDailyRegisterTempReport);
    entitiesList.push(DrugQuantityTemp);
    entitiesList.push(ActiveInDrugStore);
    entitiesList.push(ReferredPatientsReport);
    entitiesList.push(StockDistributor);
    entitiesList.push(StockDistributorBatch);
    entitiesList.push(DrugDistributor);

    return entitiesList;
  },
};
