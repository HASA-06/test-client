<template>
    <v-container>
      <v-select
        :items="dropdownItemList"
        label="타입"
        item-text="text"
        item-value="value"
        @change="getAllByStatus"
      >
      </v-select>
      <v-data-table
        :headers="headerList"
        :items="itemList"
        item-key="apply_num"
      >
      </v-data-table>
    </v-container>
</template>

<script lang="ts">
// Common
import { Component, Vue } from 'vue-property-decorator';
import router from '../../router/index';

// Structure

// Service
import PaymentService from '../../services/PaymentService';

// Model

// Utils

// Library

@Component({
  components: {
  },
})

export default class PaymentListPage extends Vue {
  /*
    About variables
  */
  private dropdownItemList = [
    {
      text: 'A',
      value: 0,
    },
    {
      text: 'B',
      value: 1,
    },
    {
      text: 'C',
      value: 2,
    },
    {
      text: 'D',
      value: 3,
    },
    {
      text: 'E',
      value: 4,
    }
  ];
  private selectedDropdownItemValue = 0;

  private headerList = [
    {
      text: '총 금액',
      align: 'center',
      value: 'amount'
    },
    {
      text: '등록번호',
      align: 'center',
      value: 'apply_num',
    },
    {
      text: '주문자 이름',
      align: 'center',
      value: 'buyer_name',
    },
    {
      text: '주분자 전화번호',
      align: 'center',
      value: 'buyer_tel',
    },
    {
      text: '결제내역',
      align: 'center',
      value: 'name',
    },
    {
      text: '결제일자',
      align: 'center',
      value: 'paid_at',
    },
  ];
  private itemList = [];

  /*
    About functions
  */
  // Page lifecycle

  // Data request
  async getAllByStatus() {
    try {
      const response = await PaymentService.findAllByStatus(this.selectedDropdownItemValue);
      this.itemList = response.data.data;
    } catch (error) {
      alert(error);
    }
  }

  // Data management

  // Page event
}
</script>

<style lang="scss" scoped>

</style>
