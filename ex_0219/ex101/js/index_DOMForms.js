function onPageLoad()
{
    handleSubmit();
}

// URL 파라미터 파싱 함수
function getUrlParams() {
    let params = {};
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, 
        function(str, key, value) {
            params[key] = decodeURIComponent(value);
        }
    );
    return params;
}

function handleSubmit(event) {
    const params = getUrlParams();
    if (Object.keys(params).length > 0) {
        const resultDiv = document.getElementById('result1');
        let resultHtml = '<div class="result">';
        resultHtml += '<h3>입력된 데이터:</h3>';
        for (let key in params) {
            resultHtml += `<p>${key}: ${params[key]}</p>`;
        }
        resultHtml += '</div>';
        resultDiv.innerHTML = resultHtml;
    }
}

function validateForm() {
    let x = document.forms[0]["fname1"].value;
        
    if (x == "") {
        alert("텍스트에 값을 입력하세요.");
        return false;
    }
}

function myFunction() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("numb").value;
        
    // If x is Not a Number or less than one or greater than 10
    let text;
    if (isNaN(x) || x < 1 || x > 10) {
        text = "입력이 1~10내 숫자가 아님";
    } else {
        text = "입력 ok";
    }
    document.getElementById("demo").innerHTML = '<div class="result">' + text + '</div>';
        
}