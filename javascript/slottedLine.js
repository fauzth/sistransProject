
function hitungLambda() {
    let j1 = parseInt(document.getElementById("jarak1").value);
    let j2 = parseInt(document.getElementById("jarak2").value);
    let j3 = parseInt(document.getElementById("jarak3").value);


    let selisih1 = j1 - j2;
    let selisih2 = j2 - j3;
    
    let nilaiselisih = Math.abs(Math.max(selisih1, selisih2));
    let lamda = nilaiselisih * 2;
    document.getElementById("resultlambda").value = lamda + ' cm';

}

function hitungVswr() {
    let vmax = parseInt(document.getElementById("vmax").value);
    let vmin = parseInt(document.getElementById("vmin").value);
    let hasilvswr = vmax / vmin

    console.log(hasilvswr);

    document.getElementById("resultvswr").value = hasilvswr;
    
    
}

function faktorRefleksi(){
        let ZO = document.getElementById("Z0").value;
        let ZL = document.getElementById("ZL").value;

        let array = ZL.split("");
        const validasi= array.includes('J');

        if(validasi== true){

            let ZLValue1 = parseInt(ZL.match(/-?\d+/g)[0],10);
            let ZLValue2 = parseInt(ZL.match(/-?\d+/g)[1],10);
            let ZOValue = parseInt(ZO.match(/-?\d+/)[0],10);

            let newZO = parseInt((`${ZL.startsWith('-') ? '-' : ''}${ZOValue}`));
            let newZL1 = parseInt((`${ZL.startsWith('-') ? '-' : ''}${ZLValue1}`));
            let newZL2 = (`${ZL.startsWith('-') ? '-' : ''}${ZLValue2}`);

            if(isNaN(newZL2)){

                let upper = Math.sqrt((newZL1**2)+(newZO**2));
                let arctan = Math.atan(((newZO*-1)/newZL1));
                let degree = (180 / Math.PI) * arctan;
                const newupper = upper.toFixed(2);
                const upperdegree = degree.toFixed(2);
                
                
                
                let lower = Math.sqrt((newZL1**2)+(newZO**2));
                let lowerarctan = Math.atan((newZO / newZL1));
                let lowdegree = (180 / Math.PI) * lowerarctan;
                const newlower = lower.toFixed(2);
                const lowerdegree = lowdegree.toFixed(2);
                
                
                let result1 = newupper / newlower;
                let result2 = (upperdegree - lowerdegree);                       
                document.getElementById("resultFaktorRefleksi").value=(`${result1} < ${result2}°`);   

            }else{

                let totalZLupper = newZL1 - newZO; 
                let totalZLlower = newZL1 + newZO; 


                let upper = Math.sqrt((totalZLupper**2)+(newZL2**2));
                let uparctan = Math.atan((newZL2/totalZLupper));
                let updegree = (180 / Math.PI) * upperarctan;
                const newupper = upper.toFixed(2);
                const upperdegree = degree.toFixed(2);
                
                
                
                let lower = Math.sqrt((totalZLlower**2)+(newZL2**2));
                let lowarctan = Math.atan((newZL2 / totalZLlower));
                let lowdegree = (180 / Math.PI) * lowarctan;
                
                const newlower = lower.toFixed(2);
                const lowerdegree = lowdegree.toFixed(2);
                
                
                let result1 = newupper / newlower;
                let result2 = (upperdegree - lowerdegree);
     
                        
                
                document.getElementById("resultFaktorRefleksi").value=(`${result1.toFixed(3)} < ${result2.toFixed(3)}°`);    
            }
        }else{
            let ZO = parseInt(document.getElementById("Z0").value);
            let ZL = parseInt(document.getElementById("ZL").value);
            let hasilFaktorRef = ((ZL - ZO) / (ZL + ZO));
                if(hasilFaktorRef < 0 ){
                    hasilFR = hasilFaktorRef * -1;     
                    document.getElementById("resultFaktorRefleksi").value = hasilFR.toFixed(3);
                }else{
                    hasilFR = hasilFaktorRef * 1;
                    document.getElementById("resultFaktorRefleksi").value = hasilFR.toFixed(3);
                }
        } 
}

function hitungFrekuensi(){
    let v = 3*10**8;
    let lambda = parseInt(document.getElementById("nilailambda").value);
    let hasilfrekuensi = v/lambda;
    console.log(v);
    console.log(lambda);
    console.log(hasilfrekuensi);
    document.getElementById("resultfrekuensi").value = hasilfrekuensi + "Hz";
}