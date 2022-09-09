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
            $('#ded').text(' Treatment for marijuana use may include: ' +
                'Counseling ' +
                'Support groups Drug ' + 'treatment programsئ');
            $('#dwd').text('Marijuana (Cannibis)');

        } else if (JSON.stringify(yourArray) == JSON.stringify(two)) {
            $('#ded').text('Some migraines can be treated at home with over-the-counter pain relievers. Severe sudden or chronic migraines are usually treated with prescription medicines. Pain-relieving, over-the-counter medications usually work best when taken at the first sign of a migraine. ');
            $('#dwd').text(' Migraine Headache');

        } else if (JSON.stringify(yourArray) == JSON.stringify(three)) {
            $('#ded').text('Treatment for a drug allergy includes: ' +
                ' Stopping the medication ' +
                ' Cool compresses ' +
                ' Over-the-counter topical medication to relieve itching' +
                ' Inhaled albuterol or epinephrine ' +
                ' Antihistamines ');
            $('#dwd').text('Drug Allergy');

        } else if (JSON.stringify(yourArray) == JSON.stringify(four)) {
            $('#ded').text('If someone you love gets diagnosed with dementia, it means they have a progressive and sometimes chronic brain condition that causes problems with their thinking, behavior, and memory.' +
                'Dementia itself is not a disease, but a syndrome; its symptoms are common to several brain diseases.');
            $('#dwd').text('Dementia Associated With Alcoholism');
        } else if (JSON.stringify(yourArray) == JSON.stringify(five)) {
            $('#ded').text('Vertigo of the inner ear often clears up without any treatment. Your doctor may prescribe medications to reduce dizziness and nausea. Your doctor may also refer you to a physical therapist or other health professional, such as an ear, nose, and throat specialist. Professionals with special training can lead you through a series of head maneuvers that can shake the calcium crystals out of the inner ear canals. These maneuvers, known as Epley maneuvers, can often effectively cure vertigo of the inner ear.');
            $('#dwd').text('Benign Paroxysmal Positional Vertigo (BPPV)');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two)) {
            $('#ded').text('Methadone or other drugs to avoid withdrawal symptoms ' +
                ' Residential treatment programs to help with withdrawal symptoms and addictive behavior' +
                ' Being hospitalized for detoxification (weaning off drugs in a safe environment), in cases of serious drug dependency' +
                'Counseling through groups such as Alcoholics Anonymous or Narcotics Anonymous+');
            $('#dwd').text('Drug Dependence and Abuse');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_three)) {
            $('#ded').text('IV fluids, insulin, and electrolytes ' +
                '  Monitoring of blood sugar and urinary ketone levels ' +
                '  Extra insulin doses' +
                '  Drinking plenty of sugar-free liquids ' +
                ' Antibiotics for infection ' +
                ' Treatment of the underlying cause'
            );
            $('#dwd').text('Diabetic Ketoacidosis');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_four)) {
            $('#ded').text('People with hypothyroidism need to take thyroid hormone replacement for the rest of their lives.');
            $('#dwd').text('Hypothyroidism (Adult)');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_five)) {
            $('#ded').text('IV fluids, insulin, and electrolytes "Monitoring of blood sugar and urinary ketone levels ,Extra insulin doses ,Drinking plenty of sugar-free liquids');
            $('#dwd').text('Diabetic Ketoacidosis');

        } else if (JSON.stringify(yourArray) == JSON.stringify(two_three)) {
            $('#ded').text('Depending on factors such as the size and location of the aneurysm, risk of rupture, and your health, treatment may include: Monitoring Surgery, including microvascular clipping (putting a clip on the neck of the aneurysm to stop blood supply) or occlusion (clamping off the artery that leads to the aneurysm)');
            $('#dwd').text('Brain Aneurysm ');

        } else if (JSON.stringify(yourArray) == JSON.stringify(two_four)) {
            $('#ded').text('If someone you love gets diagnosed with dementia, it means they have a progressive and sometimes chronic brain condition that causes problems with their thinking, behavior, and memory.'

                +
                ' Dementia itself is not a disease, but a syndrome; its symptoms are common to several brain diseases.'

                +
                'It will get worse over time. But medications might slow that decline and help with symptoms, such as behavior changes.');
            $('#dwd').text('Dementia Associated With Alcoholism ');

        } else if (JSON.stringify(yourArray) == JSON.stringify(two_five)) {
            $('#ded').text('Depending on factors such as the size and location of the aneurysm, risk of rupture, and your health, treatment may include: ' +
                'Monitoring' +
                'Surgery, including microvascular clipping (putting a clip on the neck of the aneurysm to stop blood supply) or occlusion (clamping off the artery that leads to the aneurysm)' +
                'Endovascular embolization (releasing coils or a balloon into the aneurysm to clot the blood and destroy the aneurysm) ');
            $('#dwd').text('Brain Aneurysm');

        } else if (JSON.stringify(yourArray) == JSON.stringify(three_four)) {
            $('#ded').text('Eating a more balanced diet ' +
                ' Vitamin B12 supplements' +
                'Vitamin B12 injections' +
                'Avoiding alcohol');
            $('#dwd').text('Vitamin B12 Deficiency');

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
            $('#ded').text('Cognitive-behavioral therapy  Antidepressant medication, which may also improve sleep and reduce pain Pain relievers  Anti-anxiety medications  Stress-reduction techniques');
            $('#dwd').text('Chronic Fatigue Syndrome   ');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two_four)) {
            $('#ded').text('People with hypothyroidism need to take thyroid hormone replacement for the rest of their lives.');
            $('#dwd').text('Hypothyroidism  ');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two_five)) {
            $('#ded').text('Counselin , Support group , Drug treatment pr ,');
            $('#dwd').text('Marijuana (Cannibis) Use');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_three_four)) {
            $('#ded').text('A constant sense of hopelessness and despair is a sign you may have major depression, also known as clinical depression  With major depression, it may be difficult to work, study, sleep, eat, and enjoy friends and activities. Some people have clinical depression only once in their life, while others have it several times in a lifetime.');
            $('#dwd').text('Endogenous Depression');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_three_five)) {
            $('#ded').text('IV fluids, insulin, and electrolytes ,Monitoring of blood sugar and urinary ketone levels ,Extra insulin doses ');
            $('#dwd').text('Diabetic Ketoacidosis  ');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_four_five)) {
            $('#ded').text('IV fluids, insulin, and electrolytes ,Monitoring of blood sugar and urinary ketone levels ,Extra insulin doses ,Drinking plenty of sugar-free liquids ,Antibiotics for infection ,Treatment of the underlying cause');
            $('#dwd').text('Diabetic Ketoacidosis');

        } else if (JSON.stringify(yourArray) == JSON.stringify(two_three_four)) {
            $('#ded').text('Medication ,Psychological treatment ,Vocational treatment ,Biofeedback ,Surgery');
            $('#dwd').text('Postconcussion Syndrome');

        } else if (JSON.stringify(yourArray) == JSON.stringify(two_three_five)) {
            $('#ded').text('Cavernous sinus thrombosis is a very rare, life-threatening condition that can affect adults and children,In cavernous sinus thrombosis, a blood clot blocks a vein that runs through a hollow space underneath the brain and behind the eye sockets. These veins carry blood from the face and head back to the heart.,The cause of cavernous sinus thrombosis is usually an infection. But other factors may play a role.,Cavernous sinus thrombosis is a serious condition. It causes death in up to 30% of cases.,Symptoms of Cav');
            $('#dwd').text('Cerebral Thrombosis');

        } else if (JSON.stringify(yourArray) == JSON.stringify(two_four_five)) {
            $('#ded').text('Medication ,Psychological treatment ,Vocational treatment ,Biofeedback ,Surgery');
            $('#dwd').text('Postconcussion Syndrome');

        } else if (JSON.stringify(yourArray) == JSON.stringify(three_four_five)) {
            $('#ded').text('Meningitis is a rare infection that affects the delicate membranes -- called meninges -- that cover the brain and spinal cord. You or your children can catch it.');
            $('#dwd').text('Pneumococcal Meningitis');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two_three_four)) {
            $('#ded').text('People with hypothyroidism need to take thyroid hormone replacement for the rest of their lives.');
            $('#dwd').text('Hypothyroidism (Adult)');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two_three_five)) {
            $('#ded').text('There is no specific treatment for CFS, but there are treatments to help relieve symptoms. These treatments may include:,Cognitive-behavioral therapy,Antidepressant medication, which may also improve sleep and reduce pain,Pain relievers,Anti-anxiety medications');
            $('#dwd').text('Chronic Fatigue Syndrome');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two_four_five)) {
            $('#ded').text('Medications such as interferons and drugs to suppress the immune system ,Corticosteroids ,Medications to help with symptoms such as mood issues, fatigue, and muscle spasms ,Physical therapy');
            $('#dwd').text('Multiple Sclerosis');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_three_four_five)) {
            $('#ded').text('Rest ,Over-the-counter acetaminophen for pain , Avoiding exercise, physical activity, and heavy concentration ,Hospitalization ,Surgery, for severe concussions');
            $('#dwd').text('Concussion');

        } else if (JSON.stringify(yourArray) == JSON.stringify(two_three_four_five)) {
            $('#ded').text('Monitoring ,Surgery, including microvascular clipping (putting a clip on the neck of the aneurysm to stop blood supply) or occlusion (clamping off the artery that leads to the aneurysm),Endovascular embolization (releasing coils or a balloon into the aneurysm to clot the blood and destroy the aneurysm) ,Treatment for underlying conditions, such as high blood pressure ,Anticonvulsants to prevent seizures ');
            $('#dwd').text('Brain Aneurysm');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two_three_four_five)) {
            $('#ded').html('The treatment for anemia depends on whats causing the anemia  Iron-deficiency anemia and vitamin-deficiency anemia are usually treated with iron and vitamin supplements and changes in the diet. You may need blood transfusions, surgery, or medications for other types of anemia.');
            $('#dwd').text('Anemia');

        } else {
            $('#ded').text('please choose enough ');
        }
    });

}