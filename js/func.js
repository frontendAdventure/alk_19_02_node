alert('Hi there');
document.getElementById('btn').addEventListener('click', function(){
    document.getElementById('show').innerText = document.getElementById('val').value.toUpperCase(); 
});

