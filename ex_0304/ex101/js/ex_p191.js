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