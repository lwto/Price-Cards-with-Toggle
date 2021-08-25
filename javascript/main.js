const CheckBox = document.getElementById('checkbox')
const card = document.getElementById('card-container')

CheckBox.addEventListener('change', function (e) {
    if (CheckBox.checked) {
        card.innerHTML =
            `
        <div class="card">
        <h2>Basic</h2>
        <h1><small>$</small> 19.99</h1>
        <hr>
        <h3>500 GB Storage</h3>
        <hr>
        <h3>2 Users Allowed</h3>
        <hr>
        <h3>Send up to 3 GB</h3>
        <hr>
        <div class="btn">LEARN MORE</div>
    </div>

    <div class="card active">
        <h2>Professional</h2>
        <h1><small>$</small> 24.99</h1>
        <hr>
        <h3>1 TB Storage</h3>
        <hr>
        <h3>5 Users Allowed</h3>
        <hr>
        <h3>Send up to 10 GB</h3>
        <hr>
        <div class="btn">LEARN MORE</div>
    </div>

    <div class="card">
        <h2>Master</h2>
        <h1><small>$</small> 39.99</h1>
        <hr>
        <h3>2 TB Storage</h3>
        <hr>
        <h3>10 Users Allowed</h3>
        <hr>
        <h3>Send up to 20 GB</h3>
        <hr>
        <div class="btn">LEARN MORE</div>
    </div>
        `
    }

    else {
        card.innerHTML =
            `
        <div class="card">
        <h2>Basic</h2>
        <h1><small>$</small> 199.99</h1>
        <hr>
        <h3>500 GB Storage</h3>
        <hr>
        <h3>2 Users Allowed</h3>
        <hr>
        <h3>Send up to 3 GB</h3>
        <hr>
        <div class="btn">LEARN MORE</div>
    </div>

    <div class="card active">
        <h2>Professional</h2>
        <h1><small>$</small> 249.99</h1>
        <hr>
        <h3>1 TB Storage</h3>
        <hr>
        <h3>5 Users Allowed</h3>
        <hr>
        <h3>Send up to 10 GB</h3>
        <hr>
        <div class="btn">LEARN MORE</div>
    </div>

    <div class="card">
        <h2>Master</h2>
        <h1><small>$</small> 399.99</h1>
        <hr>
        <h3>2 TB Storage</h3>
        <hr>
        <h3>10 Users Allowed</h3>
        <hr>
        <h3>Send up to 20 GB</h3>
        <hr>
        <div class="btn">LEARN MORE</div>
    </div>
        `
    }

})