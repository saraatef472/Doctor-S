function myFunction() {
    var yourArray = [];
    var one = ["1"],
        two = ["2"],
        three = ["3"],
        four = ["4"],
        five = ["5"],
        one_two = ["1", "2"],
        one_three = ["1", "3"],
        one_four = ["1", "4"],
        one_five = ["1", "5"],
        two_three = ["2", "3"],
        two_four = ["2", "4"],
        two_five = ["2", "5"],
        three_four = ["3", "4"],
        three_five = ["3", "5"],
        four_five = ["4", "5"],
        one_two_three = ["1", "2", "3"],
        one_two_four = ["1", "2", "4"],
        one_two_five = ["1", "2", "5"],
        one_three_four = ["1", "3", "4"],
        one_three_five = ["1", "3", "5"],
        one_four_five = ["1", "4", "5"],
        two_three_four = ["2", "3", "4"],
        two_three_five = ["2", "3", "5"],
        two_four_five = ["2", "4", "5"],
        three_four_five = ["3", "4", "5"],
        one_two_three_four = ["1", "2", "3", "4"],
        one_two_three_five = ["1", "2", "3", "5"],
        one_two_four_five = ["1", "2", "4", "5"],
        one_three_four_five = ["1", "3", "4", "5"],
        two_three_four_five = ["2", "3", "4", "5"],
        one_two_three_four_five = ["1", "2", "3", "4", "5"];

    $("input:checkbox[name=type]:checked").each(function() {
        yourArray.push($(this).val());
        if (JSON.stringify(yourArray) == JSON.stringify(one)) {
            $('#ded').text(' Treatment for a drug allergy includes:  ' +
                'Stopping the medication ' +
                'Cool compresses ' + 'Antihistamines');
            $('#dwd').text('Drug Allergy');

        } else if (JSON.stringify(yourArray) == JSON.stringify(two)) {
            $('#ded').text('Monitoring or Surgery, including microvascular clipping , Treatment for underlying conditions, such as high blood pressure . or Anticonvulsants to prevent seizures ');
            $('#dwd').text(' Cerebral aneurysm');

        } else if (JSON.stringify(yourArray) == JSON.stringify(three)) {
            $('#ded').text('Treatment for a Pulmonary Embolism includes: ' +
                ' Procedures using a catheter to extract the clot ' +
                ' Surgery to remove the clot  ' +
                'Anticoagulant medication or thrombolytic medication to dissolve the clot ' +
                ' Vena cava filter, a metal filter in your main vein to trap future clots before they reach the lungs' +
                ' Antihistamines ');
            $('#dwd').text('Pulmonary Embolism');

        } else if (JSON.stringify(yourArray) == JSON.stringify(four)) {
            $('#ded').text('Treatment of narcotic abuse may include medications and behavioral counseling. A doctor may give you the drug naloxone if you take an overdose of a narcotic.');
            $('#dwd').text('Narcotic Abuse');
        } else if (JSON.stringify(yourArray) == JSON.stringify(five)) {
            $('#ded').text('Stopping aspirin use immediately ,  Gastric lavage (stomach pumping), depending on when the aspirin was taken ,  IV fluids for dehydration , and IV sodium bicarbonate (sometimes with potassium), to help move salicylate to the urine' +
                'Ventilator, if the person is agitated, in a coma, or having trouble breathing ');
            $('#dwd').text('Aspirin Poisoning');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two)) {
            $('#ded').text('Treatment for heartburn and GERD usually begins with over-the-counter antacids and medications to help reduce stomach acid. You also may want to avoid the foods and drinks that make your symptoms worse. If these treatments dont');
            $('#dwd').text('Heartburn/GERD');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_three)) {
            $('#ded').text('Long-term control medications include inhaled corticosteroids, leukotriene modifiers, long-acting beta agonists, combination inhalers, omalizumab (Xolair).' +
                '  Quick-relief or rescue medications include short-acting bronchodilators and oral corticosteroids.' +
                ' Allergy treatment, if your asthma is triggered by allergies' +
                'Treatment for asthma includes an asthma action plan that has in writing when to take certain medications based on your symptoms. Medications include both those for long-term'
            );
            $('#dwd').text('Asthma (Teen and Adult)');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_four)) {
            $('#ded').text('Rest  , Drinking plenty of fluids,  Breathing in warm, moist air , Over-the-counter pain relievers and fever reducers ');
            $('#dwd').text('Bronchitis');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_five)) {
            $('#ded').text('Thyroid gland suppressants ,Radioactive iodine, Beta-blockers for rapid heart rate and other symptoms , Surgery to remove all or part of the thyroid gland, Thyroid replacement therapy if the gland is removed');
            $('#dwd').text('Hyperthyroidism');

        } else if (JSON.stringify(yourArray) == JSON.stringify(two_three)) {
            $('#ded').text('Blood pressure medications, Phosphate binders, Cholesterol medications, A special diet,  Exercise,   Dialysis ');
            $('#dwd').text('Chronic Kidney Disease');

        } else if (JSON.stringify(yourArray) == JSON.stringify(two_four)) {
            $('#ded').text('Treatment for small cell lung cancer usually involves cancer-killing drugs (chemotherapy). You take these by mouth or get infusions into your vein. You may have chemo either alone or combined with radiation therapy. Doctors do not often suggest surgery for small cell lung cancer unless it is at a very early stage.');
            $('#dwd').text('Lung Cancer (Small Cell)');

        } else if (JSON.stringify(yourArray) == JSON.stringify(two_five)) {
            $('#ded').text('Rest' + 'Drinking plenty of fluids,Breathing in warm, moist air, Over-the-counter pain relievers and fever reducers,  Medications to help reduce coughing and open your airways  ');
            $('#dwd').text('Bronchitis');

        } else if (JSON.stringify(yourArray) == JSON.stringify(three_four)) {
            $('#ded').text('Surgery to remove tumors  ' +
                ' Chemotherapy ' +
                'Radiation therapy ' +
                'Laser treatments to destroy cancer cells ');
            $('#dwd').text('Lung Cancer (Non-Small Cell Lung Carcinoma)');

        } else if (JSON.stringify(yourArray) == JSON.stringify(three_five)) {
            $('#ded').text('Taking a small amount of carbohydrates ' +
                ' Adjusting medications ' +
                ' Making changes to your diet ' +
                ' Treating any underlying medical conditions');
            $('#dwd').text('Low Blood Sugar (Hypoglycemia)');

        } else if (JSON.stringify(yourArray) == JSON.stringify(four_five)) {
            $('#ded').text('If someone you love gets diagnosed with dementia, it means they have a progressive and sometimes chronic brain condition that causes problems with their thinking, behavior, and memory. Dementia itself is not a disease, but a syndrome; its symptoms are common to several brain diseases.');
            $('#dwd').text('Dementia Associated With Alcoholism ');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two_three)) {
            $('#ded').text('IV fluids, Blood products , Medications to increase blood pressure, Oxygen' +
                'Pacemaker');
            $('#dwd').text('Shock');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two_four)) {
            $('#ded').text('Being on a ventilator to help you breathe , Antibiotics ,IV fluids , Medications to remove fluid from the lungs');
            $('#dwd').text('Acute Respiratory Distress Syndrome');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two_five)) {
            $('#ded').text('Activated charcoal to absorb the poison , Other substances that bind with poison and carry it out of the body , Specific antidotes when available , Other medications to control symptoms');
            $('#dwd').text('Poisoning');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_three_four)) {
            $('#ded').text('Corticosteroids , Drugs to suppress the immune system ,  Organ transplant for rare cases ');
            $('#dwd').text('Sarcoidosis');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_three_five)) {
            $('#ded').text('Applying heat or ice, Anti-inflammatory medications, Avoiding activities that make pain worse ,Cortisone injections for severe pain');
            $('#dwd').text('Costochondritis');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_four_five)) {
            $('#ded').text('Quitting smoking ,Medications to open airways , Oxygen ,Pulmonary rehabilitation , Surgery');
            $('#dwd').text('Emphysema');

        } else if (JSON.stringify(yourArray) == JSON.stringify(two_three_four)) {
            $('#ded').text('Surgery to remove the breast (mastectomy) or a portion of it (lumpectomy), along with lymph nodes if necessary , Radiation therapy or chemotherapy to destroy cancer cells ,Hormone therapy to block or lower estrogen levels ');
            $('#dwd').text('Breast Cancer (Male)');

        } else if (JSON.stringify(yourArray) == JSON.stringify(two_three_five)) {
            $('#ded').text('Blood pressure medications ,Phosphate binders, Cholesterol medications ,  A special diet, Exercise ,  Dialysis');
            $('#dwd').text('Chronic Kidney Disease');

        } else if (JSON.stringify(yourArray) == JSON.stringify(two_four_five)) {
            $('#ded').text('Quitting smoking , Medications to open airways ,Oxygen , Pulmonary rehabilitation');
            $('#dwd').text('Emphysema');

        } else if (JSON.stringify(yourArray) == JSON.stringify(three_four_five)) {
            $('#ded').text('Adults and older children can usually treat the symptoms of whooping cough at home. Treatment with antibiotics is recommended for anyone who has had whooping cough for less than four weeks (it is not clear if antibiotics are beneficial for people who have been ill with the disease longer than three or four weeks.). Infants and young children may need treatment in a hospital. Some children may need oxygen, IV fluids, and sedatives.');
            $('#dwd').text('Whooping Cough');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two_three_four)) {
            $('#ded').text('People with hypothyroidism need to take thyroid hormone replacement for the rest of their lives.');
            $('#dwd').text('Hypothyroidism (Adult)');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two_three_five)) {
            $('#ded').text('You need to take antibiotics to treat bacterial pneumonia. Your doctor also may suggest that you take a cough suppressant. In some cases, you may need to be treated in the hospital.');
            $('#dwd').text('Bacterial Pneumonia');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two_four_five)) {
            $('#ded').text('Anticoagulant medication or thrombolytic medication to dissolve the clot , Procedures using a catheter to extract the clot , Surgery to remove the clot , Vena cava filter, a metal filter in your main vein to trap future clots before they reach the lungs');
            $('#dwd').text('Pulmonary Embolism');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_three_four_five)) {
            $('#ded').text('Better control of other conditions that are related to esophageal spasms, such as GERD or anxiety disorders , Nitroglycerin tablets  ,Calcium channel blockers (a type of medicine often used for high blood pressure), Antidepressants (which can ease the pain of esophageal spasm) ');
            $('#dwd').text('Esophageal Spasm');

        } else if (JSON.stringify(yourArray) == JSON.stringify(two_three_four_five)) {
            $('#ded').text('Beta blockers, which help stop irregular heartbeats  ,Surgery, or invasive catheter-based procedures, to repair or replace the valv');
            $('#dwd').text('Mitral Valve Prolapse');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two_three_four_five)) {
            $('#ded').html('Antibiotic , Medications to thin mucus,  Bronchodilators, Oxygen ,Therapy to loosen lung mucus ,Surgery, Lung transplant');
            $('#dwd').text('Cystic Fibrosis');

        } else {
            $('#ded').text('please choose enough ');
        }
    });

}