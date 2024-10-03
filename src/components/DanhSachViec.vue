<style>
.khungSuon {
  /* border: 1px solid #000; */
  height: 100%;
  width: 100%;
  padding: 0 24px 24px 24px;
  font-size: 18px;
  overflow-y: scroll;
}

.khungSuon::-webkit-scrollbar {
  background-color: #465e72;
}

.khungSuon::-webkit-scrollbar-track {
  background-color: #c0cad1;
}

.khungSuon::-webkit-scrollbar-thumb {
  background-color: #abb3b9;
}
</style>

<template>
  <div class="khungSuon">
    <div class="danhSachViec">
      <ThanhViec viec.ma viec.noiDung />
      <ThanhViec viec.ma viec.noiDung />
    </div>

    <div v-for="item in items" :key="item.name">
      {{ item.name }}
    </div>
  </div>
</template>

<script>
import ThanhViec from "./ThanhViec.vue";

const danhSachViec = [];

for (let i = 1; i <= 8; ++i) {
  const viecThuI = {
    ma: i,
    noiDung: "Việc " + i,
  };

  danhSachViec.push(viecThuI);
}

export default {
  name: "DanhSachViec",
  components: {
    ThanhViec,
  },

  data: () => {
    return {
      items: [{ name: "Cà phê" }, { name: "Trà đặc" }, { name: "Bò húc" }],
    };
  },
};
</script>
