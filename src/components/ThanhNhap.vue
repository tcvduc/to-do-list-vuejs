<style>
.khungSuonThanhNhap {
  height: 80px;
  width: 100%;
  padding: 28px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.thanhNhap {
  width: 100%;
  margin-right: 12px;
  height: 40px;
  padding: 12px;
  font-size: 18px;
  border-radius: 3px;
  border-color: #465e72;
  border-width: 1px;
}

.thanhNhap:focus {
  border-color: #21425c;
  outline: #21425c;
}

.thanhNhap::placeholder {
  color: #465e72;
}

.nutThem {
  width: 120px;
  height: 40px;
  margin-left: 12px;
  cursor: pointer;
  background-color: #c4cfdd;
  font-size: 18px;
  border: 0;
  border-radius: 3px;
  font-weight: 500;
  color: #283f52;
}

.nutThem:hover {
  background-color: #b9c2cea7;
}

.nutThem:active {
  background-color: #b9c2cefa;
}
</style>

<template>
  <div class="khungSuonThanhNhap">
    <input class="thanhNhap" type="text" placeholder="Nhập việc cần làm" />
    <button class="nutThem">Thêm</button>
  </div>
</template>

<script>
export default {};
</script>
