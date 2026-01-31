const waterInMlPerKg = 35

export function calcHowMuchWaterPerKg( bodyweightInKg:number ) {
    const calculatedWaterIntakeMl = waterInMlPerKg * bodyweightInKg
    if(calculatedWaterIntakeMl > 999){
        const calculatedWaterIntakeLiter = calculatedWaterIntakeMl / 1000
        return calculatedWaterIntakeLiter + " L"
    } else return calculatedWaterIntakeMl + " ml"
}