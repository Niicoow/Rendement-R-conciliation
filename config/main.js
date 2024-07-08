function calculer() {
    // Récupération des valeurs saisies
    const qTa = parseFloat(document.getElementById('qTa').value) || 0;
    const qTb = parseFloat(document.getElementById('qTb').value) || 0;
    const qTc = parseFloat(document.getElementById('qTc').value) || 0;
    const qTd = parseFloat(document.getElementById('qTd').value) || 0;
    const qTe = parseFloat(document.getElementById('qTe').value) || 0;

    // Calcul du rendement
    const rendement = ((qTc + qTd + qTe) / qTa) * 100;

    // Calcul de l'écart de rendement
    const diffRendement = qTa - (qTc + qTd + qTe);

    // Calcul de la réconciliation
    const reconciliation = ((qTc + qTd + qTe + qTb) / qTa) * 100;

    // Affichage des résultats
    document.getElementById('resultRendement').textContent = rendement.toFixed(2) + '%';
    document.getElementById('diffRendement').textContent = diffRendement;
    document.getElementById('resultReconciliation').textContent = reconciliation.toFixed(2) + '%';

    // Explication des calculs
    const explanation = `
        Rendement : 
        ((C + D + E) / A) * 100 = ((${qTc} + ${qTd} + ${qTe}) / ${qTa}) * 100 = ${rendement.toFixed(2)}%.\n
        
        Réconciliation :
        ((C + D + E + B) / A) * 100 = ((${qTc} + ${qTd} + ${qTe} + ${qTb}) / ${qTa}) * 100 = ${reconciliation.toFixed(2)}%.
        L'écart de réconciliation est : A - (C + D + E) = ${qTa} - (${qTc} + ${qTd} + ${qTe}) = ${diffRendement}.
    `
    ;
    document.getElementById('explanation').textContent = explanation;
}

function effacer() {
    // Effacement des valeurs saisies
    document.getElementById('qTa').value = '';
    document.getElementById('qTb').value = '';
    document.getElementById('qTc').value = '';
    document.getElementById('qTd').value = '';
    document.getElementById('qTe').value = '';

    // Effacement des résultats
    document.getElementById('resultRendement').textContent = '';
    document.getElementById('diffRendement').textContent = '';
    document.getElementById('resultReconciliation').textContent = '';
    document.getElementById('explanation').textContent = '';
}
