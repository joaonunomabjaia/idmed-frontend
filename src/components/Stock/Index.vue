<template>
  <div>
    <TitleBar />
    <div class="q-px-xl q-mx-xl q-mt-md">
      <q-tabs v-model="tab" align="left" dense inline-label class="">
        <q-tab name="stock" label="Stock" @click="selectTab('stock')" />
        <q-tab name="entrance" label="Entrada" @click="selectTab('entrance')" />
        <q-tab
          name="inventory"
          label="Inventário"
          @click="selectTab('inventory')"
        />
        <div class="absolute-top-right q-mr-md">
          <q-btn
            flat
            icon-right="refresh"
            label="Actualizar Lista"
            no-caps
            @click="reloadPage"
          />
        </div>
      </q-tabs>
      <q-separator color="grey-13" size="1px" />
      <div class="q-mt-md">
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="stock">
            <KeepAlive>
              <StockTable />
            </KeepAlive>
          </q-tab-panel>
          <q-tab-panel name="entrance">
            <KeepAlive> <EntranceTable /></KeepAlive>
          </q-tab-panel>
          <q-tab-panel name="inventory">
            <KeepAlive>
              <InventoryTable />
            </KeepAlive>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
    <q-page-sticky
      v-if="tab !== 'stock'"
      position="bottom-right"
      :offset="[18, 18]"
    >
      <q-btn
        class="q-mb-xl q-mr-xl"
        fab
        color="primary"
        icon="add"
        @click="addEntrada"
      />
    </q-page-sticky>
    <q-dialog persistent v-model="createEntrance">
      <EntranceRegister @close="createEntrance = false" />
    </q-dialog>
    <q-dialog persistent v-model="createInventory">
      <InventoryRegister @close="createInventory = false" />
    </q-dialog>
    <q-dialog v-model="alert.visible" persistent>
      <Dialog
        :type="alert.type"
        @closeDialog="closeDialog"
        @commitOperation="closeInventory"
      >
        <template v-slot:title> Informação</template>
        <template v-slot:msg> {{ alert.msg }} </template>
      </Dialog>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref, provide, computed, onMounted } from 'vue';
import StockEntranceService from 'src/services/api/stockEntranceService/StockEntranceService';
// import StockEntranceMethod from 'src/methods/stockEntrance/StockEntranceMethod';

import { useSwal } from 'src/composables/shared/dialog/dialog';
import { useLoading } from 'src/composables/shared/loading/loading';

// Components
import Dialog from 'components/Shared/Dialog/Dialog.vue';
import TitleBar from 'components/Shared/TitleBar.vue';
import StockTable from 'components/Stock/StockTable.vue';
import EntranceRegister from 'components/Stock/Entrance/EntranceRegister.vue';
import EntranceTable from 'components/Stock/Entrance/EntranceTable.vue';
import InventoryTable from 'components/Stock/Inventory/InventoryTable.vue';
import InventoryRegister from 'components/Stock/Inventory/InventoryRegister.vue';
import InventoryService from 'src/services/api/inventoryService/InventoryService';
import clinicService from 'src/services/api/clinicService/clinicService';
import drugService from 'src/services/api/drugService/drugService';

const { alertError } = useSwal();

const alert = ref({
  type: '',
  visible: false,
  msg: '',
});
const tab = ref('stock');
const createEntrance = ref(false);
const createInventory = ref(false);
const title = ref('Gestão de Stock');

const addEntrada = () => {
  if (tab.value === 'entrance') {
    createEntrance.value = true;
  } else {
    const inventory = InventoryService.getOpenInventory();
    if (inventory !== null) {
      alertError(
        'Existe registado um inventário ainda aberto, por favor termine o mesmo antes de iniciar um novo inventário.'
      );
    } else {
      createInventory.value = true;
    }
  }
  //
};
const reloadPage = () => {
  window.location.reload();
};
const clinic = computed(() => {
  return clinicService.currClinic();
});
const activeDrugs = computed(() => {
  return drugService.getActiveDrugs();
});

onMounted(() => {
  const activeTabStock = localStorage.getItem('activeTabStock');
  if (activeTabStock === '' || activeTabStock === null) {
    tab.value = 'stock';
    localStorage.setItem('activeTabStock', 'stock');
  } else {
    tab.value = activeTabStock;
  }
});

const selectTab = (tabName) => {
  localStorage.setItem('activeTabStock', tabName);
  tab.value = tabName;
};
provide('currClinic', clinic);
provide('activeDrugs', activeDrugs);
provide('isCharts', false);
provide('title', title);
</script>

<style></style>
