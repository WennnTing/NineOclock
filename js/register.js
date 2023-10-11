function doFirst() {
    document.getElementById('theForm').onsubmit = validate;
}

function validate(e) {
    e.preventDefault();
    let name = document.querySelector('#Name').value;
    let account = document.querySelector('#account').value;
    let password = document.querySelector('#password').value;
    let email = document.querySelector('#email').value;
    let phone = document.querySelector('#phone').value;
    let gender = document.querySelector('#gender').value;

    let isNameValid = /^[\u4e00-\u9fffA-Za-z]{2,10}$/.test(name);
    let isAccountValid = /^[A-Za-z0-9]{8,15}$/.test(account);
    let isPasswordValid = /^[A-Za-z0-9]{8,15}$/.test(password);
    let isEmailValid = /^[A-Za-z0-9_.-]+@[A-Za-z0-9]+\.[a-zA-Z]{2,6}$/.test(email);
    let isPhoneValid = /^09\d{8}$/.test(phone);
    let isGenderValid = gender.selectedIndex != 0;

    if (isNameValid && isAccountValid && isPasswordValid && isEmailValid && isPhoneValid && isGenderValid) {
        // 從 localStorage 中檢索現有的使用者數據
        let existingData = localStorage.getItem('userData');

        // 解析現有數據，如果不存在，則初始化為空數組
        let userDataArray = existingData ? JSON.parse(existingData) : [];

        if (!Array.isArray(userDataArray)) {
            // 如果不是陣列，則初始化為一個空陣列
            userDataArray = [];
        }
        // 創建新的使用者數據對象
        let userData = {
            name: name,
            account: account,
            password: password,
            email: email,
            phone: phone,
            gender: gender
        };

        // 將新的使用者數據對象添加到數組中
        userDataArray.push(userData);

        // 將更新後的數組保存回 localStorage
        localStorage.setItem('userData', JSON.stringify(userDataArray));

        document.querySelector('form').reset();
        alert('註冊成功');
    } else {
        // 抓錯誤 顯示錯誤消息
        if (!isNameValid) {
            addErrorMessage('Name', '\n請輸入姓名');
        }
        if (!isAccountValid) {
            addErrorMessage('account', '\n請輸入帳號');
        }
        if (!isPasswordValid) {
            addErrorMessage('password', '\n請輸入密碼');
        }
        if (!isEmailValid) {
            addErrorMessage('email', '\n請輸入信箱');
        }
        if (!isPhoneValid) {
            addErrorMessage('phone', '\n請輸入電話');
        }
        if (!isGenderValid) {
            addErrorMessage('gender', '\n請選擇性別');
        }
    }
}

function addErrorMessage(id, message) {
    let element = document.getElementById(id)
    let error = `${id}Error`
    let existingError = document.getElementById(error)

    if (!existingError) {
        addSpan = document.createElement('span')
        addSpan.id = error
        addSpan.className = 'error'
        // addSpan.style.color = 'red';
        // addSpan.style.fontSize = '16px';
        addSpan.appendChild(document.createTextNode(message))
        addSpan.innerText = message

        element.parentNode.appendChild(addSpan)
    }
}

function removeErrorMessage(id) {
    let theSpan = document.getElementById(`${id}Error`)
    if (theSpan) {
        theSpan.parentNode.removeChild(theSpan)
    }
}



window.addEventListener('load', doFirst)