<style>
.khungSuongToDoList {
  border: 1px solid #000;
  width: 450px;
  height: 600px;
  background-color: #d8eaf9;
  display: flex;
  flex-direction: column;
}

.title {
  color: var(--title-color);
  font-size: 28px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  margin-top: 24px;
}
</style>

<template>
  <div class="khungSuongToDoList">
    <div class="title">Việc Làm Hôm Nay</div>

    <ThanhNhap
      :handleInputOnKeydown="handleInputOnKeydown"
      :handleAddButtonOnClick="handleAddButtonOnClick"
    />
    <DanhSachViec :tasks="tasks" />
  </div>
</template>

<script>
import ThanhNhap from "./ThanhNhap.vue";
import DanhSachViec from "./DanhSachViec.vue";

const classes = {
  thanhNhap: "thanhNhap",
};

/**
 *
 * @param {KeyboardEvent} event
 */
function handleInputOnKeydown(event) {
  const thanhNhap = window.document.getElementsByClassName(
    classes.thanhNhap
  )[0];

  if (event.key === "Enter") {
    const task = thanhNhap.value;
    this.tasks.push(task);
    thanhNhap.value = "";
    return;
  }
}

function handleAddButtonOnClick() {
  const thanhNhap = window.document.getElementsByClassName(
    classes.thanhNhap
  )[0];
  const inputValue = thanhNhap.value;

  if (inputValue === "") {
    return;
  }

  this.tasks.push(inputValue);
  thanhNhap.value = "";

  return;
}

export default {
  name: "KhungSuongToDoList",
  components: {
    ThanhNhap,
    DanhSachViec,
  },
  data: () => {
    return {
      tasks: [],
    };
  },
  methods: {
    handleInputOnKeydown,
    handleAddButtonOnClick,
  },
};
</script>
