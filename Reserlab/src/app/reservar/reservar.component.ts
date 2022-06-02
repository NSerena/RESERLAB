import { Component, ViewChild } from '@angular/core';
import { jqxSchedulerComponent } from 'jqwidgets-ng/jqxscheduler/angular_jqxscheduler';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styles: [],
})
export class ReservarComponent {
  @ViewChild('calendarioReservas') scheduler?: jqxSchedulerComponent;

  ngAfterViewInit(): void {
    this.scheduler?.ensureAppointmentVisible('id1');
  }

  source: any = {
    dataType: 'array',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'description', type: 'string' },
      { name: 'location', type: 'string' },
      { name: 'subject', type: 'string' },
      { name: 'calendar', type: 'string' },
      { name: 'start', type: 'date' },
      { name: 'end', type: 'date' },
      { name: 'status', type: 'string' },
      { name: 'resizable', type: 'boolean' },
      { name: 'draggable', type: 'boolean' },
      { name: 'readOnly', type: 'boolean' },
    ],
    id: 'id',
    localData: this.generateAppointments(),
  };

  dataAdapter: any = new jqx.dataAdapter(this.source);
  date: any = new jqx.date(2022, 4, 23);

  appointmentDataFields: any = {
    from: 'start',
    to: 'end',
    id: 'id',
    description: 'description',
    location: 'location',
    subject: 'subject',
    resourceId: 'calendar',
    status: 'status',
    resizable: 'resizable',
    draggable: 'draggable',
    readOnly: 'readOnly',
  };

  resources: any = {
    colorScheme: 'scheme05',
    dataField: 'calendar',
    source: new jqx.dataAdapter(this.source),
  };

  views: any[] = [
    {
      type: 'weekView',
      showWeekends: false,
      workTime: {
        fromDayOfWeek: 1,
        toDayOfWeek: 5,
        fromHour: 8,
        toHour: 23,
      },
      allDayRowHeight: 40,
      rowHeight: 24,
      appointmentsMinHeight: 10,
      timeRuler: { formatString: 'HH:mm' },
    },
  ];

  generateAppointments(): any {
    let appointments = new Array();
    let appointment1 = {
      id: 'id1',
      description: 'George brings projector for presentations.',
      calendar: 'Termicos',
      start: new Date(2022, 5, 2, 15, 0, 0),
      end: new Date(2022, 5, 2, 16, 0, 0),
      subject: 'experimento 134',
      resizable: true,
      draggable: false,
      readOnly: true,
    };
    let appointment2 = {
      id: 'id2',
      description: '',
      calendar: 'Sintesis',
      start: new Date(2022, 5, 1, 20, 0, 0),
      end: new Date(2022, 5, 1, 21, 30, 0),
      subject: 'experimento 96',
      resizable: true,
      draggable: false,
      readOnly: true,
    };
    let appointment3 = {
      id: 'id3',
      description: '',
      calendar: 'Termicos',
      start: new Date(2022, 4, 30, 9, 0, 0),
      end: new Date(2022, 4, 30, 10, 0, 0),
      subject: 'experimento 357',
      resizable: true,
      draggable: false,
      readOnly: true,
    };
    let appointment4 = {
      id: 'id4',
      description: '',
      calendar: 'Sintesis',
      start: new Date(2022, 4, 30, 8, 0, 0),
      end: new Date(2022, 4, 30, 14, 0, 0),
      subject: 'experimento 521',
      resizable: true,
      draggable: false,
      readOnly: true,
    };
    let appointment5 = {
      id: 'id5',
      description: 'George brings projector for presentations.',
      calendar: 'Caracterización',
      start: new Date(2022, 5, 3, 17, 0, 0),
      end: new Date(2022, 5, 3, 19, 0, 0),
      subject: 'experimento 723',
      resizable: true,
      draggable: false,
      readOnly: true,
    };
    let appointment6 = {
      id: 'id6',
      description: 'George brings projector for presentations.',
      calendar: 'Caracterización',
      start: new Date(2022, 4, 30, 8, 0, 0),
      end: new Date(2022, 4, 30, 10, 0, 0),
      subject: 'experimento 723',
      resizable: true,
      draggable: false,
      readOnly: true,
    };
    let tipo1 = {
      id: 'id7',
      description: 'George brings projector for presentations.',
      calendar: 'Caracterización',
      start: new Date(2022, 4, 31, 13, 0, 0),
      end: new Date(2022, 4, 31, 13, 30, 0),
      subject: 'Clase',
      status: 'busy',
      resizable: true,
      draggable: false,
      readOnly: true,
    };
    let tipo2 = {
      id: 'id8',
      description: 'George brings projector for presentations.',
      calendar: 'Termicos',
      start: new Date(2022, 4, 31, 13, 30, 0),
      end: new Date(2022, 4, 31, 14, 0, 0),
      subject: 'Análisis',
      status: 'free',
      resizable: true,
      draggable: false,
      readOnly: true,
    };
    let tipo3 = {
      id: 'id9',
      description: 'George brings projector for presentations.',
      calendar: 'Sintesis',
      start: new Date(2022, 4, 31, 14, 0, 0),
      end: new Date(2022, 4, 31, 14, 30, 0),
      subject: 'Experimentación',
      status: 'tentative',
      resizable: true,
      draggable: false,
      readOnly: true,
    };
    let tipo4 = {
      id: 'id10',
      description: 'George brings projector for presentations.',
      calendar: 'Caracterización',
      start: new Date(2022, 4, 31, 14, 30, 0),
      end: new Date(2022, 4, 31, 15, 0, 0),
      subject: 'Avería',
      status: 'outOfOffice',
      resizable: true,
      draggable: false,
      readOnly: true,
    };

    appointments.push(appointment1);
    appointments.push(appointment2);
    appointments.push(appointment3);
    appointments.push(appointment4);
    appointments.push(appointment5);
    appointments.push(appointment6);
    appointments.push(tipo1);
    appointments.push(tipo2);
    appointments.push(tipo3);
    appointments.push(tipo4);

    return appointments;
  }

  localization = {
    firstDay: 0,
    days: {
      names: [
        'Domingo',
        'Lunes',
        'Martes',
        'Miercoles',
        'Jueves',
        'Viernes',
        'Sábado',
      ],
      namesShort: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
    },
    months: {
      names: [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
        '',
      ],
      namesAbbr: [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Sept',
        'Oct',
        'Nov',
        'Dic',
        '',
      ],
    },
    weekViewString: 'Reservas semanales',
    editDialogCreateTitleString: 'Nueva Reserva',
    editDialogSubjectString: 'Info',
    editDialogLocationString: 'Campus',
    editDialogFromString: 'Desde',
    editDialogToString: 'Hasta',
    editDialogAllDayString: 'Todo el día',
    editDialogDescriptionString: 'Anotaciones',
    editDialogResourceIdString: 'Tipo',
    editDialogColorString: 'Color',
    editDialogColorPlaceHolderString: 'Elige un color',
    editDialogTimeZoneString: 'Zona horaria',
    editDialogSelectTimeZoneString: 'Selecciona zona horario',
    editDialogRepeatString: 'Repetir',
    editDialogRepeatEveryString: 'Repetir cada',
    editDialogRepeatNeverString: 'Nunca',
    editDialogRepeatDailyString: 'Cada día',
    editDialogRepeatWeeklyString: 'Cada semana',
    editDialogRepeatMonthlyString: 'Cada mes',
    editDialogRepeatYearlyString: 'Cada año',
    editDialogSaveString: 'Guardar',
    editDialogCancelString: 'Cancelar',
    editDialogStatusString: 'Motivo',
    editDialogStatuses: {
      free: 'Análisis',
      tentative: 'Experimentación',
      busy: 'Clase',
      outOfOffice: 'Avería',
    },
  };
}
