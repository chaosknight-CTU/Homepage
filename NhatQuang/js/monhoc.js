const cources = [
	{
		id: 'CB001',
		name: 'Thiên văn học cơ bản',
		openAt: '30/11/2021',
	},
	{
		id: 'VT002',
		name: 'Vũ trụ học cơ bản',
		openAt: '1/12/2021',
	},
	{
		id: 'QS001',
		name: 'Học máy và thiên văn học',
		openAt: '15/12/2021',
	},
	
	
];

cources.forEach((cource, index) => {
	document.getElementById('cources').innerHTML += /*Html*/ `
    <tr>
        <td>${index + 1}</td>
        <td>${cource.id}</td>
        <td>${cource.name}</td>
        <td>${cource.openAt}</td>
    </tr>
    `;
});

