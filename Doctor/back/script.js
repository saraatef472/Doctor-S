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
            $('#ded').text('Nonsteroidal anti-inflammatory drugs  , Corticosteroids  , Tumor necrosis factor (TNF) blockers, to reduce inflammation and pain  , Physical therapy  , Surgery ');
            $('#dwd').text('Ankylosing Spondylitis');

        } else if (JSON.stringify(yourArray) == JSON.stringify(two)) {
            $('#ded').text('Nonsteroidal anti-inflammatory medications, such as ibuprofen (Advil, Motrin) or naproxen (Aleve)  , Prescription pain relievers  , Corticosteroid injections  , Physical therapy  , Surgery');
            $('#dwd').text('Lumbar Spinal Stenosis');
        } else if (JSON.stringify(yourArray) == JSON.stringify(three)) {
            $('#ded').text('A short period of rest  , Anti-inflammatory medications  , Pain medications  , Muscle relaxers  , Physical therapy  , Steroid injections  , Surgery');
            $('#dwd').text('Lumbar (Low-Back) Herniated Disc');
        } else if (JSON.stringify(yourArray) == JSON.stringify(four)) {
            $('#ded').text('A back brace , Pain medications , Physical therapy , Vertebroplasty, a procedure in which cement is injected into the vertebrae, quickly stabilizing spinal bone fragments and the spine  , Surgery to relieve pressure on nerves or back surgery');
            $('#dwd').text('Vertebral Compression Fracture (Thoracic)');
        } else if (JSON.stringify(yourArray) == JSON.stringify(five)) {
            $('#ded').text('Antibiotics , Hydration , Rest , Medication for pain, nausea, or fever , Surgery');
            $('#dwd').text('Kidney Infection');
        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two)) {
            $('#ded').text('Bed rest for a short time, no more than 3 days ,  NSAIDs, such as ibuprofen, ketoprofen, and naproxen, for pain and swelling ,  Ice packs , Ultrasound ,  Physical therapy, heat, and stretching exercises once youre feeling better ,  Other medications, such as muscle relaxants');
            $('#dwd').text('Lumbar Strain and Lumbar Sprain');
        } else if (JSON.stringify(yourArray) == JSON.stringify(one_three)) {
            $('#ded').text('Surgery is the main treatment for hyperparathyroidism. It removes the enlarged gland or glands. Some doctors also prescribe medication called calcimimetics that turn off the secretion of PTH. The doctor also will treat any underlying disease that is causing hyperparathyroidism.');
            $('#dwd').text('Hyperparathyroidism');
        } else if (JSON.stringify(yourArray) == JSON.stringify(one_four)) {
            $('#ded').text('DMARDs such as methotrexate  , Medications that suppress the immune system  , Corticosteroids  , Biologic agents  , Anti-inflammatory medications  , Physical therapy  , Surgery , Plasmapheresis (a process that filters the blood and removes harmful antibodies) ');
            $('#dwd').text('Rheumatoid Arthritis');
        } else if (JSON.stringify(yourArray) == JSON.stringify(one_five)) {
            $('#ded').text('Penicillin and/or other antibiotics , Blood transfusion  , Hydroxyurea, a medication to help reduce pain crises  , Bone marrow transplant, if disease is severe');
            $('#dwd').text('Sickle Cell Disease');
        } else if (JSON.stringify(yourArray) == JSON.stringify(two_three)) {
            $('#ded').text('Antibiotics, either IV or oral  , Surgery to remove damaged bone or restore blood flow  , Good control of underlying conditions, such as diabetes  , Amputation, for severe cases');
            $('#dwd').text('Osteomyelitis');
        } else if (JSON.stringify(yourArray) == JSON.stringify(two_four)) {
            $('#ded').text('Slowly taking less of the medication that is causing Cushing’s syndrome, as directed by your doctor , Surgery to remove the tumor that is causing Cushing’s syndrome, followed by radiation in some cases , Cortisol replacement therapy after surgery , Medicine to stop the body from making cortisol ');
            $('#dwd').text('Cushings Syndrome');
        } else if (JSON.stringify(yourArray) == JSON.stringify(two_five)) {
            $('#ded').text('Calcium supplements , Vitamin D supplements , Dietary changes , Medications to lower phosphorus levels , IV calcium in emergencies');
            $('#dwd').text('Pseudohypoparathyroidism');
        } else if (JSON.stringify(yourArray) == JSON.stringify(three_four)) {
            $('#ded').text('You need to take antibiotics to treat bacterial pneumonia. Your doctor also may suggest that you take a cough suppressant. In some cases, you may need to be treated in the hospital.');
            $('#dwd').text('Bacterial Pneumonia');
        } else if (JSON.stringify(yourArray) == JSON.stringify(three_five)) {
            $('#ded').text('Appendicitis treatment includes: Possible surgery and antibiotics');
            $('#dwd').text('Appendicitis');
        } else if (JSON.stringify(yourArray) == JSON.stringify(four_five)) {
            $('#ded').text('Drugs to lower uric acid levels , Pain relievers , Medications to stop swelling and inflammation , Corticosteroids');
            $('#dwd').text('Gout');
        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two_three)) {
            $('#ded').text('Over-the-counter pain relievers for mild cases , Prescription pain medications and muscle relaxants , Corticosteroid injections , Physical therapy , Surgery, in rare cases');
            $('#dwd').text('Cervical Spondylosis');
        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two_four)) {
            $('#ded').text('If you are severely dehydrated, your doctor may put you on IV fluids. He or she is likely to recommend that you avoid activities that cause excessive sweating.');
            $('#dwd').text('Heat Cramps');
        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two_five)) {
            $('#ded').text('Cognitive-behavioral therapy  , Medications, including antidepressants and anti-anxiety medications  , Support groups');
            $('#dwd').text('Generalized Anxiety Disorder');
        } else if (JSON.stringify(yourArray) == JSON.stringify(one_three_four)) {
            $('#ded').text('Heat ,  Rest ,  Stretching ,  Bracing ,  Physical therapy ,  Pain relievers ,  Stopping certain medications , Medication to relax muscles ,  Botulinum toxin injections ,  Deep brain stimulation ,  Surgery');
            $('#dwd').text('Torticollis');
        } else if (JSON.stringify(yourArray) == JSON.stringify(one_three_five)) {
            $('#ded').text('Corticosteroids , Antibiotics , Blood pressure medications , Drugs that suppress the immune system , Dietary changes, such as reducing protein, salt, and fluids , Avoiding certain medications, such as NSAID pain relievers , Plasmapheresis, a type of blood transfusion , Dialysis or kidney transplant for severe cases');
            $('#dwd').text('Glomerulonephritis');
        } else if (JSON.stringify(yourArray) == JSON.stringify(one_four_five)) {
            $('#ded').text('Antibiotics  , Drinking lots of water  , Phenazopyridine, a medication used to dull the pain in the urethra. Note that it colors the urine bright red/orange or brown and can stain clothing. It is available over the counter. It may help you feel better, but it cant cure the UTI.');
            $('#dwd').text('Urinary Tract Infection');
        } else if (JSON.stringify(yourArray) == JSON.stringify(two_three_four)) {
            $('#ded').text('Nonsteroidal anti-inflammatory drugs  , Corticosteroids  , Tumor necrosis factor (TNF) blockers, to reduce inflammation and pain  , Physical therapy  , Surgery ');
            $('#dwd').text('Ankylosing Spondylitis');
        } else if (JSON.stringify(yourArray) == JSON.stringify(two_three_five)) {
            $('#ded').text('You need to take antibiotics to treat bacterial pneumonia. Your doctor also may suggest that you take a cough suppressant. In some cases, you may need to be treated in the hospital.');
            $('#dwd').text('Bacterial Pneumonia');
        } else if (JSON.stringify(yourArray) == JSON.stringify(two_four_five)) {
            $('#ded').text('Corticosteroids , Antibiotics , Blood pressure medications , Drugs that suppress the immune system , Dietary changes, such as reducing protein, salt, and fluids , Avoiding certain medications, such as NSAID pain relievers , Plasmapheresis, a type of blood transfusion , Dialysis or kidney transplant for severe cases, ');
            $('#dwd').text('Glomerulonephritis');
        } else if (JSON.stringify(yourArray) == JSON.stringify(three_four_five)) {
            $('#ded').text('Heat ,  Rest ,  Stretching ,  Bracing ,  Physical therapy ,  Pain relievers ,  Stopping certain medications , Medication to relax muscles ,  Botulinum toxin injections ,  Deep brain stimulation ,  Surgery');
            $('#dwd').text('Torticollis');
        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two_three_four)) {
            $('#ded').text('Heat ,  Rest ,  Stretching ,  Bracing ,  Physical therapy ,  Pain relievers ,  Stopping certain medications , Medication to relax muscles ,  Botulinum toxin injections ,  Deep brain stimulation ,  Surgery');
            $('#dwd').text('Torticollis');
        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two_three_five)) {
            $('#ded').text('DMARDs such as methotrexate  , Medications that suppress the immune system  , Corticosteroids  , Biologic agents  , Anti-inflammatory medications  , Physical therapy  , Surgery , Plasmapheresis (a process that filters the blood and removes harmful antibodies) ');
            $('#dwd').text('Rheumatoid Arthritis');
        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two_four_five)) {
            $('#ded').text('Antibiotics  , Drinking lots of water  , Phenazopyridine, a medication used to dull the pain in the urethra. Note that it colors the urine bright red/orange or brown and can stain clothing. It is available over the counter. It may help you feel better, but it cant cure the UTI.');
            $('#dwd').text('Urinary Tract Infection (UTI)');
        } else if (JSON.stringify(yourArray) == JSON.stringify(one_three_four_five)) {
            $('#ded').text('DMARDs such as methotrexate  , Medications that suppress the immune system  , Corticosteroids  , Biologic agents  , Anti-inflammatory medications  , Physical therapy  , Surgery , Plasmapheresis (a process that filters the blood and removes harmful antibodies) ');
            $('#dwd').text('Rheumatoid Arthritis');
        } else if (JSON.stringify(yourArray) == JSON.stringify(two_three_four_five)) {
            $('#ded').text('A back brace , Pain medications , Physical therapy , Vertebroplasty, a procedure in which cement is injected into the vertebrae, quickly stabilizing spinal bone fragments and the spine  , Surgery to relieve pressure on nerves or back surgery');
            $('#dwd').text('Vertebral Compression Fracture (Thoracic)');
        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two_three_four_five)) {
            $('#ded').text('Nonsteroidal anti-inflammatory drugs  , Corticosteroids  , Tumor necrosis factor (TNF) blockers, to reduce inflammation and pain  , Physical therapy  , Surgery ');
            $('#dwd').text('Ankylosing Spondylitis');
        } else {
            $('#ded').text('no');

        }
    });

}