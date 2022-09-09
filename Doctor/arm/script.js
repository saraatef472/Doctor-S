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
            $('#ded').text(' Rest , Anti-inflammatory medication,  Hand and wrist exercises, Wrist splints ,  Cortisone injections ,Surgery to relieve the pressure on the nerves');
            $('#dwd').text('Carpal Tunnel Syndrome');

        } else if (JSON.stringify(yourArray) == JSON.stringify(two)) {
            $('#ded').text('Blood thinners to keep the clot from getting bigger and decrease clotting , Regular blood tests , Thrombolytic inhibitors, clot-busting medications to dissolve large clots in life-threatening situations , Surgery to insert a filter in a large vein, the vena cava, to prevent a clot from reaching the lungs; used in people who cant take blood-thinners, Compression stockings to help prevent swelling and new clots ');
            $('#dwd').text('Blood Clot in Legs');

        } else if (JSON.stringify(yourArray) == JSON.stringify(three)) {
            $('#ded').text('Pain medications, Steroid injections,  Physical therapy, Surgery');
            $('#dwd').text('Cervical Herniated Disc');

        } else if (JSON.stringify(yourArray) == JSON.stringify(four)) {
            $('#ded').text('Finding shelter ,Elevating the area ,Soaking the affected area in water heated to 37°C to 39°C (98.6 to 102.2°F), Pain relievers ,IV fluids ,Removal of dead tissue, in severe cases , Surgery , Antibiotics, if skin is infected');
            $('#dwd').text('Frostbite');
        } else if (JSON.stringify(yourArray) == JSON.stringify(five)) {
            $('#ded').text('Over-the-counter pain relievers for mild cases ,Prescription pain medications and muscle relaxants ,Corticosteroid injections ,Physical therapy');
            $('#dwd').text('congestive heart failure');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two)) {
            $('#ded').text('Over-the-counter pain relievers for mild cases ,  Prescription pain medications and muscle relaxants ,  Corticosteroid injections ,  Physical therapy ,  Surgery, in rare cases');
            $('#dwd').text('Cervical Spondylosis');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_three)) {
            $('#ded').text('Resting, icing, and elevating the knee  ,  NSAIDs -- such as ibuprofen, ketoprofen, or naproxen -- for pain and swelling  ,  Treatment of an underlying condition, such as a cartilage tear or arthritis  ,  Corticosteroids  ,  Surgery');
            $('#dwd').text('Bakers Cys');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_four)) {
            $('#ded').text('Drugs to lower uric acid levels ,   Pain relievers ,   Medications to stop swelling and inflammation ,   Corticosteroids');
            $('#dwd').text('Raynauds Phenomenon');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_five)) {
            $('#ded').text('Drugs to lower uric acid levels ,  Pain relievers ,  Medications to stop swelling and inflammation ,  Corticosteroids');
            $('#dwd').text('Rich mans disease ');

        } else if (JSON.stringify(yourArray) == JSON.stringify(two_three)) {
            $('#ded').text('Medications such as interferons and drugs to suppress the immune system   , Corticosteroids   , Medications to help with symptoms such as mood issues, fatigue, and muscle spasms   , Physical therapy');
            $('#dwd').text('Demyelinating disease');

        } else if (JSON.stringify(yourArray) == JSON.stringify(two_four)) {
            $('#ded').text('Fixing what is causing the seizures (treating an infection, for example) , Medicines (anticonvulsants) ,Brain surgery ,Vagal nerve stimulator (a pacemaker-like device placed in the chest to lessen the frequency of seizures) ,Ketogenic diet (a high-fat, low-carbohydrate diet mostly recommended for children) or a diet low in carbohydrates for adults');
            $('#dwd').text('Epilepsy (Tonic-Clonic or Grand Mal Seizures)');

        } else if (JSON.stringify(yourArray) == JSON.stringify(two_five)) {
            $('#ded').text('Anti-viral medications (acyclovir, famciclovir, valacyclovir) reduce the pain and duration of a shingles outbreak.   ,  Zostavax (a shingles vaccine) reduces by half the risk of developing shingles.   , Antidepressants and pain medications can reduce post-shingles nerve pain.  ,  Topical corticosteroids are sometimes prescribed to reduce inflammation and pain.');
            $('#dwd').text('Shingles (Herpes Zoster)');

        } else if (JSON.stringify(yourArray) == JSON.stringify(three_four)) {
            $('#ded').text('Surgery to remove tumors  ' +
                ' Chemotherapy ' +
                'Radiation therapy ' +
                'Laser treatments to destroy cancer cells ');
            $('#dwd').text('Lung Cancer (Non-Small Cell Lung Carcinoma)');

        } else if (JSON.stringify(yourArray) == JSON.stringify(three_five)) {
            $('#ded').text('DMARDs such as methotrexate , Medications that suppress the immune system , Corticosteroids , Biologic agents , Anti-inflammatory medications , Physical therapy , Surgery');
            $('#dwd').text('Sprained Ankle');

        } else if (JSON.stringify(yourArray) == JSON.stringify(four_five)) {
            $('#ded').text('Rest and ice  , Anti-inflammatory medication to reduce pain and swelling  , Cortisone shots to reduce swelling  , Medication to ease symptoms and prevent attacks from occurring ');
            $('#dwd').text('Cauda Equina Syndrome');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two_three)) {
            $('#ded').text('Nonsteroidal pain relievers for pain and swelling , Corticosteroids , Drugs that suppress the immune system , Light treatment for skin symptoms , Physical therapy , Medications for acid reflux, high blood pressure, swallowing problems, kidney problems, and other complications');
            $('#dwd').text('Blood Clot in Legs');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two_four)) {
            $('#ded').text('Wernicke encephalopathy is treated with thiamine and stopping alcohol use.');
            $('#dwd').text('Gonococcal Arthritis');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two_five)) {
            $('#ded').text('Hospitalization  , Pentamidine, suramin, and melarsoprol for the first stage of the disease  , Melarsoprol, eflornithine, and nifurtimox for the second stage of the disease');
            $('#dwd').text('Sleeping sickness');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_three_four)) {
            $('#ded').text('For minor injuries, taking a nonsteroidal anti-inflammatory drug such as ibuprofen or aspirin may be enough to ease pain and swelling. Splinting an injured finger may be necessary. More serious injuries may require surgery. Your doctor may recommend physical therapy to help you begin moving an injured finger again after it heals.');
            $('#dwd').text('Finger Injury');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_three_five)) {
            $('#ded').text('Medicines such as alpha-one antagonists and calcium channel blockers  , Medications to widen blood vessels  , Surgery to reduce sweating by cutting the sympathetic nerves, in rare c , ');
            $('#dwd').text('Acrocyanosis');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_four_five)) {
            $('#ded').text('Oxygen Intravenous drugs to lower blood pressure and prevent more tearing or damage to the aorta  , Emergency surgery to remove the dissected part of the aorta, close the false channel that develops between the layers of the aorta wall, repair or replace the aortic valve if it is leaking, and rebuild the aorta with a synthetic graft  , Endovascular procedure -- stent-grafts are inserted into blood vessels through catheters inserted through the groin ');
            $('#dwd').text('Aortic Dissection');

        } else if (JSON.stringify(yourArray) == JSON.stringify(two_three_four)) {
            $('#ded').text('Activated charcoal to absorb the poison  , Other substances that bind with poison and carry it out of the body  , Specific antidotes when available  , Other medications to control symptoms');
            $('#dwd').text('Poisoning');

        } else if (JSON.stringify(yourArray) == JSON.stringify(two_three_five)) {
            $('#ded').text('DMARDs such as methotrexate  , Medications that suppress the immune system  , Corticosteroids  , Biologic agents  , Anti-inflammatory medications  , Physical therapy  , Surgery');
            $('#dwd').text('Rheumatoid Arthritis');

        } else if (JSON.stringify(yourArray) == JSON.stringify(two_four_five)) {
            $('#ded').text('Corticosteroids  , Antibiotics  , Blood pressure medications  , Drugs that suppress the immune system  , Dietary changes, such as reducing protein, salt, and fluids  , Avoiding certain medications, such as NSAID pain relievers  , Plasmapheresis, a type of blood transfusion  , Dialysis or kidney transplant for severe cases');
            $('#dwd').text('Glomerulonephritis');

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
            $('#ded').text('If alcohol caused your cirrhosis, the most important thing you can do is stop drinking. , Avoid medications that may be toxic to the liver, including over-the-counter drugs. , Hospitalization may be necessary for cirrhosis with complications. , A liver transplant may be necessary if cirrhosis becomes advanced.');
            $('#dwd').text('Cirrhosis of the Liver');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_three_four_five)) {
            $('#ded').text('Rest ,  Anti-inflammatory medication ,  Hand and wrist exercises ,  Wrist splints ,  Cortisone injections ,  Surgery to relieve the pressure on the nerves');
            $('#dwd').text('Carpal Tunnel Syndrome');

        } else if (JSON.stringify(yourArray) == JSON.stringify(two_three_four_five)) {
            $('#ded').text('Beta blockers, which help stop irregular heartbeats  ,Surgery, or invasive catheter-based procedures, to repair or replace the valv');
            $('#dwd').text('Mitral Valve Prolapse');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two_three_four_five)) {
            $('#ded').html('Anti-viral medications (acyclovir, famciclovir, valacyclovir) reduce the pain and duration of a shingles outbreak.  , Zostavax (a shingles vaccine) reduces by half the risk of developing shingles.  , Antidepressants and pain medications can reduce post-shingles nerve pain. , Topical corticosteroids are sometimes prescribed to reduce inflammation and pain.');
            $('#dwd').text('Shingles (Herpes Zoster)');

        } else {
            $('#ded').text('please choose enough ');
        }
    });

}