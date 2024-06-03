<script>
import {
  Day,
  Week,
  Month,
  MonthAgenda, ScheduleComponent, ViewsDirective, ViewDirective, ResourcesDirective, ResourceDirective
} from "@syncfusion/ej2-vue-schedule";

export default {
  components: {
    'ejs-schedule': ScheduleComponent,
    'e-views': ViewsDirective,
    'e-view': ViewDirective,
    'e-resources': ResourcesDirective,
    'e-resource': ResourceDirective
  },
  data: function () {
    return {
      selectedDate: new Date(2024, 4, 16),
      eventSettings: {
        dataSource: [
          {
            Id: 1,
            Subject: 'Surgery - Andrew',
            EventType: 'Confirmed',
            StartTime: new Date(2024, 4, 16, 9, 0),
            EndTime: new Date(2024, 4, 16, 10, 0),
            OwnerId: 2
          },
          {
            Id: 2,
            Subject: 'Consulting - John',
            EventType: 'Confirmed',
            StartTime: new Date(2024, 4, 14, 10, 0),
            EndTime: new Date(2024, 4, 14, 11, 30),
            OwnerId: 3
          },
          {
            Id: 3,
            Subject: 'Therapy - Robert',
            EventType: 'Requested',
            StartTime: new Date(2024, 4, 13, 11, 30),
            EndTime: new Date(2024, 4, 13, 12, 30),
            OwnerId: 1
          }
        ]
      },
      ownerDataSource: [
        { OwnerText: "Nancy", Id: 1, OwnerColor: "#ffaa00" },
        { OwnerText: "Steven", Id: 2, OwnerColor: "#f8a398" },
        { OwnerText: "Michael", Id: 3, OwnerColor: "#7499e1" }
      ]
    }
  },
  provide: {
    schedule: [Day, Week, Month, MonthAgenda]
  }
};
</script>

<template>
  <div>
    <ejs-schedule height='580px' width='100%' class="component-calendar" :selectedDate='selectedDate' :eventSettings='eventSettings'>
    <e-views>
      <e-view option='Day'></e-view>
      <e-view option='Week'></e-view>
      <e-view option='Month'></e-view>
    </e-views>
    <e-resources>
      <e-resource field="OwnerId" title="Owner" name="Owners" :dataSource="ownerDataSource" textField="OwnerText"
        idField="Id" colorField="OwnerColor">
      </e-resource>
    </e-resources>
    </ejs-schedule>
  </div>
</template>

<style>
@import '../../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../../../node_modules/@syncfusion/ej2-calendars/styles/material.css';
@import '../../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../../../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../../../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../../../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../../../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css';

.component-calendar {
  border-radius: 15px;
  border: 0.5px solid white;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.05), 4px 4px 8px rgba(0, 0, 0, 0.025);
}
</style>