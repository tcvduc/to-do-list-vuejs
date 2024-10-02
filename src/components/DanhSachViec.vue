<style>
.khungSuon {
  border: 1px solid #000;
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

.thanhViec {
  width: 100%;
  height: 80px;
  background-color: white;
  margin-bottom: 24px;
}

.thanhViec:last-child {
  margin-bottom: 0;
}
</style>

<template>
  <div class="khungSuon">
    <div class="thanhViec"></div>
    <div class="thanhViec"></div>
    <div class="thanhViec"></div>
    <div class="thanhViec"></div>
    <div class="thanhViec"></div>
    <div class="thanhViec"></div>
  </div>
</template>

<script>
export default {};
</script>
