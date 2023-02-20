<template>
  <div class="tabSystem-horizontal-container">
    <TabLabelHorizontal
      id="1"
      title="Construction Solutions"
      icon="../src/assets/icons/ico_bathroom.svg"
      @click="handleTabHorizontal(1)"
    />
    <TabLabelHorizontal
      id="2"
      title="Design"
      icon="../src/assets/icons/ico_design.svg"
      @click="handleTabHorizontal(2)"
    />
    <TabLabelHorizontal
      id="3"
      title="Design"
      icon="../src/assets/icons/ico_design.svg"
      @click="handleTabHorizontal(3)"
    />
    <TabLabelHorizontal
      id="4"
      title="Design"
      icon="../src/assets/icons/ico_design.svg"
      @click="handleTabHorizontal(4)"
    />
  </div>

  <TabSysExperiment />
  <!-- <img src="../assets/icons/ico_bathroom.svg" alt="" /> -->
</template>

<script>
import TabLabelHorizontal from "./TabSystem/TabLabelHorizontal.vue";
import { useStore } from "../Store/Store";

import TabSysExperiment from "./TabSystem/TabSysExperiment.vue";

export default {
  components: { TabLabelHorizontal, TabSysExperiment },
  setup() {
    const store = useStore();

    const handleTabHorizontal = (e) => {
      store.setTabHorizontal(e);
      console.log(e);
    };

    return { handleTabHorizontal, TabSysExperiment };
  },
};
</script>

<style scoped>
.tabSystem-horizontal-container {
  display: flex;
  flex-direction: row;
  gap: var(--s-m);
}
</style>
