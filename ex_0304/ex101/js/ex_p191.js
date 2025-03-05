var d = document;
var msg = '';

fnPage191 = () => {
    //동기 방식
    console.log('==== 동기 방식 ====');
    console.log('1. 라면 장보기');
    console.log('2. 물 끓이기');
    console.log('3. 끓는 물에 라면, 스프 넣고, 익히기');
    console.log('4. 완성');

    msg += '==== 동기 방식 ====<br>';
    msg += '1. 라면 장보기<br>';
    msg += '2. 물 끓이기<br>';
    msg += '3. 끓는 물에 라면, 스프 넣고, 익히기<br>';

    d
        .getElementById('divS1')
        .innerHTML = msg;

    //비동기 방식
    console.log('==== 비동기 방식 ====');

    msg = '==== 동기 방식 ====<br>';
    setTimeout(() => {
        console.log('A. 라면 장보기(비동기 3초)');

        msg += 'A. 라면 장보기(비동기 3초)<br>';
        d
            .getElementById('divS1_3')
            .innerHTML = msg;
    }, 3000);

    console.log('B. 물 끓이기');
    console.log('C. 끓는 물에 라면, 스프 넣고, 익히기');
    console.log('D. 완성');

    msg += 'B. 물 끓이기<br>';
    msg += 'C. 끓는 물에 라면, 스프 넣고, 익히기<br>';
    msg += 'D. 완성<br>';

    d
        .getElementById('divS1_2')
        .innerHTML = msg;
}

fnPage194 = () => {
    msg = '';

    //라면 장보기 성공일 경우
    const ra1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('A. 라면 장보기');
            console.log('B. 라면 물 끓이기');
            resolve('라면 장보기 완료 (resolve)');

            msg += 'A. 라면 장보기<br>';
            msg += 'B. 라면 물 끓이기<br>';
            msg += '라면 장보기 완료 (resolve)<br>';
        }, 1000)
    });

    ra1
        .then((result) => {
            console.log(result);
            console.log('C. 끓는 물에 라면, 스프 넣고, 익히기');
            console.log('D. 라면 완성 후 시식하기');

            msg += '라면성공 :' + result + '<br>';
            msg += 'C. 끓는 물에 라면, 스프 넣고, 익히기<br>';
            msg += 'D. 라면 완성 후 시식하기<br>';
        })
        .catch((result) => {
            console.log(result);
            console.log('라면 만들기 중단');

            msg += '라면실패 :' + result + '<br>';
            msg += '라면 만들기 중단<br>';
        });

    const co1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('E. 커피 장보기');
            console.log('F. 커피 물 끓이기');
            reject('커피 품절 (reject)');

            msg += 'E. 커피 장보기<br>';
            msg += 'F. 커피 물 끓이기<br>';
            msg += '커피 품절 (reject)<br>';
        }, 1000);
    });

    co1
        .then((result) => {
            console.log(result);
            console.log('G. 끓는 물에 커피 넣고, 젖기');
            console.log('H. 커피 완성 후 마시기');

            msg += '커피성공 :' + result + '<br>';
            msg += 'G. 끓는 물에 커피 넣고, 젖기<br>';
            msg += 'H. 커피 완성 후 마시기<br>';
        })
        .catch((result) => {
            console.log(result);
            console.log('커피 만들기 중단');

            msg += '커피오류 :' + result + '<br>';
            msg += '커피 만들기 중단<br>';
        });

    const pas1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('no result');

            msg += 'no result<br>';
        }, 1000);
    });

    pas1
        .then((result) => {
            console.log(result);

            msg += '파스타성공 :' + result + '<br>';
        })
        .catch((result) => {
            console.log(result);

            msg += '파스타실패 :' + result + '<br>';
        });

    setTimeout(() => {
        console.log('라면 장보기: ', ra1);
        console.log('커피 장보기: ', co1);
        console.log('파스타 장보기: ', pas1);

        msg += `라면 장보기: ${ra1}<br>`;
        msg += `커피 장보기: ${co1}<br>`;
        msg += `파스타 장보기: ${pas1}<br>`;

        d
            .getElementById('divS2')
            .innerHTML = msg;
    }, 1000);

}

fnPage198 = () => {
    const ra1 = () => {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('A. 라면 장보기');
                console.log('B. 라면 물 끓이기');
                resolve('라면 장보기 완료');
            }, 1000);
        })
    }

    const co1 = () => (new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('E. 커피 장보기');
            console.log('F. 커피 물 끓이기');
            reject('커피 품절');
        }, 500);
    }));

    const fn_promise = async () => {
        try {
            const result1 = await ra1();
            console.log(result1);
            console.log('C.  끓는 물에 라면, 스프 넣고, 익히기');
            console.log('D.  라면 완성 후 시식하기');
        } catch (result) {
            console.log(result);
            console.log('라면 만들기 중단');
        }

        try {
            const result2 = await co1();
            console.log('G. 끓는 물에 커피 넣고, 젖기');
            console.log('H. 커피 완성 후 마시기');
        } catch (result) {
            console.log(result); //'커피 품절'
            console.log('커피 만들기 중단');
        }
    };

    fn_promise();
}

fnPage203 = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(`Data 1: ${data}`)
        })
        .catch((error) => {
            console.log(`Error 1: ${error}`)
        });

    const getData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            console.log(`data : ${data}`);
            console.log(`Data 2: ${data.slice(0, 10)}`);

            const tbody = d.querySelector('#fetchTable tbody');
            tbody.innerHTML = '';

            data
                .slice(0, 10)
                .forEach(item => {
                    const row = d.createElement('tr');
                    const idCell = d.createElement('td');
                    idCell.textContent = item.id;
                    row.appendChild(idCell);

                    const titleCell = d.createElement('td');
                    titleCell.textContent = item.title;
                    row.appendChild(titleCell);

                    const bodyCell = d.createElement('td');
                    bodyCell.textContent = item.body;
                    row.appendChild(bodyCell);

                    tbody.appendChild(row);
                });
        } catch (error) {
            console.log(error.message);
        }
    };

    getData();
    d.addEventListener('DOMContentLoaded', () => {
        getData();
    });
}

fnPage206 = () => {
    function rocketReady(rocketName) {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                const result = Math.random() > 0.3;
                console.log(`result: ${result}`);

                if (result) {
                    resolve(`${rocketName} 발사 완료`);
                } else {
                    reject(`${rocketName} 발사 실패`);
                }
            }, 3000)

        });
    }
    rocketReady('나로호')
        .then((response) => {
            console.log(`성공: ${response}`);
        })
        .catch((response) => {
            console.log(`실패: ${response}`);
        })
        . finally((response) => {
            console.log('우주 발사체 테스트 완료');
        });
}

fnPage207 = () => {
    const API_URL = "https://jsonplaceholder.typicode.com/users";

    function getFetchUsers() {
        console.log("Fetching Load Data...");

        fetch(API_URL)
        .then((response) => {
            console.log(response.status);
            if (!response.ok) {
                throw new Error(`응답오류! 상태: ${response.status}`);
            }
            return response.json();
        })
        .then((users) => {
            console.log(`users: ${users}`);
            users.slice(0, 4)
                .forEach((user, index) => {
                    console.log(`${index + 1} ${user.name} (${user.email})`);
                });
        })
        .catch((error) => {
            // 네트워크 또는 처리 오류시 실행
            console.error("Error fetching users:", error.message);
        });
    }

    getFetchUsers();
}
