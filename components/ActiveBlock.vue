<template>
  <fragment>
    <tr>
      <td>{{ item[0] }}</td>
      <td>{{ item[1] }}</td>
      <td>{{ item[2] }}</td>
      <td>{{ item[5] }}</td>
      <td>{{ item[6] }}</td>
      <td>{{ item[7] }}</td>
      <td
        class="table__button"
        @click="showUser()">
        <div>Подробнее</div>
        <div
          class="triangle-down"
          :class="[
          userIsOpen && 'triangle-down_opened'
        ]"
        />
      </td>
    </tr>
    <transition name="fade">
      <tr class="more">
        <td colspan="6"
            class="faq__answer_opened"
            v-if="userIsOpen"
        >
          <ul>
            <li><b>Сокращённое наименование для ЮЛ, ИП :</b> {{ item[3] }}</li>
            <li><b>Место жительства, место рождения, паспортные данные ИП:</b> {{ item[4] }}</li>
            <li><b>Государственный регистрационный номер о записи гос.регистрации ИП, ЮЛ: </b>{{ item[8] }}</li>
            <li><b>Место нахождения ЮЛ, место фактического осуществления деятельности ИП: </b>{{ item[9] }}</li>
            <li><b>ФИО исполнительного органа ИП, ЮЛ: </b>{{ item[10] }}</li>
            <li><b>Сведения о соответствии условиям членства в СРО: </b>{{ item[11] }}</li>
            <li><b>Название страховщика:</b> {{ item[12] }}</li>
            <li><b>Место нахождения страховщика: </b>{{ item[13] }}</li>
            <li><b>Лицензия страховщика: </b>{{ item[14] }}</li>
            <li><b>Информация для установления контактов со страховщиком:</b> {{ item[15] }}</li>
            <li><b>Размер страховой суммы по договору страхования ответственности:</b> {{ item[16] }}</li>
            <li><b>Размер взноса в Ком.Фонд: </b>{{ item[17] }}</li>
            <li><b>Размер взноса в Ком. Фонд возмещения вреда:</b> {{ item[18] }}</li>
            <li><b>Размер взноса в Ком. Фонд обеспечения договорных обязательств:</b> {{ item[19] }}</li>
            <li><b>Сведения об уровне ответственности по Ком. Фонду возмещения вреда: </b>{{ item[20] }}</li>
            <li><b>Сведения об уровне ответственности по Ком. Фонду обеспечения договорных обязательств:</b> {{
                item[21]
              }}
            </li>
            <li><b>Сведения о приостановлении, о возобновлении, об отказе в возобновлении или о прекращении действия
              права:</b>
              {{ item[22] }}
            </li>
            <li><b>Сведения о наличии у члена саморегулируемой организации права соответственно осуществлять подготовку
              проектной документации, по договору подряда на подготовку проектной документации, заключаемым с
              использованием конкурентных способов заключения договоров: </b>{{ item[23] }}
            </li>
            <li><b>Сведения о результатах проведённых проверок члена: </b>{{ item[24] }}</li>
            <li><b>Факты применения к члену СРО дисциплинарных взысканий: </b>{{ item[25] }}</li>
          </ul>
        </td>
      </tr>
    </transition>
  </fragment>

</template>

<script>
import {Fragment} from 'vue-fragment'

export default {
  name: 'PortfolioBlock',
  components: {
    Fragment
  },

  data: () => ({
    userIsOpen: false,
    pageNumber: 0
  }),

  props: {
    item: {
      type: Array,
      default: () => ([]),
    },
  },

  methods: {
    showUser() {
      this.userIsOpen = !this.userIsOpen
    },
    nextPage() {
      this.pageNumber++;
    },
    prevPage() {
      this.pageNumber--;
    }
  }
};
</script>

<style scoped>
.faq__answer {
  height: 0;
  opacity: 0;
  transition: 0.5s;
  font-family: 'Raleway', sans-serif;
}

.faq__answer_opened {
  height: auto;
  opacity: 1;
  transition: 0.5s;
  margin: 10px 0;
  padding: 20px;
}

.triangle-down {
  margin: auto;
  width: 15px;
  height: 15px;
  border-top: 2px solid #ffffff;
  border-right: 2px solid #ffffff;
  transform: rotate(135deg);
  transition: all 0.2s ease-in-out;
}

.triangle-down_opened {
  margin: 10px auto 0;
  width: 15px;
  height: 15px;
  border-top: 2px solid #ffffff;
  border-right: 2px solid #ffffff;
  transform: rotate(-45deg);
  transition: all 0.2s ease-in-out;
}

.more {
  width: 100%;
  background: #a7d6d7;
}

.table__button {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  background: #228dfe;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-active, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}
</style>
