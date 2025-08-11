function showOverlay() {
    document.getElementById('overlay').style.display = 'flex';
}

function hideOverlay() {
    document.getElementById('overlay').style.display = 'none';
}
function resetFields(){
    const name=document.getElementById('name');
    const feedback=document.getElementById('feedback');
    name.value='';
    feedback.value='';
}