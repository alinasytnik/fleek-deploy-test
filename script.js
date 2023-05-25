document.getElementById('load').addEventListener('click', loadData);

function loadData() {
    // Mock data for demonstration purposes
    const data = [
        { id: 1, name: 'Test 1', status: 'Pass' },
        { id: 2, name: 'Test 2', status: 'Fail' },
        { id: 3, name: 'Test 3', status: 'Pass' },
    ];

    let output = '';
    data.forEach((test) => {
        output += `<p>Test ID: ${test.id}, Test Name: ${test.name}, Status: ${test.status}</p>`;
    });

    document.getElementById('content').innerHTML = output;
}
