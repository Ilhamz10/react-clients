import { IClient } from '../types/ClientsTypes';
import client1 from '../assets/img/client1.png';
import client2 from '../assets/img/client2.png';
import client3 from '../assets/img/client3.png';
import noteImg1 from '../assets/img/note_Img1.png';

export const clients: IClient[] = [
	{
		id: 1,
		name: 'Кравцова Александра',
		age: 20,
		sex: 'Жен',
		img: client2,
		notes: [
			{
				id: 1,
				date: '2023-09-27',
				text: `Физические упражнения способствуют активизации мышечных
                сокращений, кровотока в тканях, снимают отечность, повышают
                энергетические возможности мышц. Улучшенное питание мышечной ткани
                ускоряет замещение различных посттравматических дефектов в самих
                мышцах, костной ткани, связках и сухожилиях.`,
			},
			{
				id: 2,
				date: '2023-09-30',
				text: `Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.`,
				img: noteImg1,
			},
		],
	},
	{
		id: 2,
		name: 'Рожков Денис',
		age: 19,
		sex: 'Муж',
		img: client1,
		notes: [
			{
				id: 1,
				date: '2023-05-15',
				text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sint quos
				ipsam obcaecati? Odio illo cupiditate, maiores consequuntur, quis optio,
				quia temporibus repudiandae alias a amet minus saepe nostrum doloribus.`,
			},
		],
	},
	{
		id: 3,
		name: 'Диброва Алевтина',
		age: 34,
		sex: 'Жен',
		img: client3,
		notes: [
			{
				id: 1,
				date: '2023-03-02',
				text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sint quos
				ipsam obcaecati? Odio illo cupiditate, maiores consequuntur, quis optio,
				quia temporibus repudiandae alias a amet minus saepe nostrum doloribus.`,
			},
		],
	},
	{
		id: 4,
		name: 'Иванов Дмитрий',
		age: 30,
		sex: 'Муж',
		img: client1,
		notes: [
			{
				id: 1,
				date: '2022-04-23',
				text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sint quos
				ipsam obcaecati? Odio illo cupiditate, maiores consequuntur, quis optio,
				quia temporibus repudiandae alias a amet minus saepe nostrum doloribus.`,
			},
		],
	},
	{
		id: 5,
		name: 'Форс Александр',
		age: 25,
		sex: 'Муж',
		img: client1,
		notes: [
			{
				id: 1,
				date: '2023-07-12',
				text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sint quos
				ipsam obcaecati? Odio illo cupiditate, maiores consequuntur, quis optio,
				quia temporibus repudiandae alias a amet minus saepe nostrum doloribus.`,
			},
		],
	},
	{
		id: 6,
		name: 'Ахмедов Артур',
		age: 22,
		sex: 'Муж',
		img: client1,
		notes: [
			{
				id: 1,
				date: '2023-12-12',
				text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sint quos
				ipsam obcaecati? Odio illo cupiditate, maiores consequuntur, quis optio,
				quia temporibus repudiandae alias a amet minus saepe nostrum doloribus.`,
			},
		],
	},
];
