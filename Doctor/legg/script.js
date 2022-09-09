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
            $('#ded').text(' Drugs to lower uric acid levels ,Pain relievers ,Medications to stop swelling and inflammation ,Corticosteroids');
            $('#dwd').text('Gout');

        } else if (JSON.stringify(yourArray) == JSON.stringify(two)) {
            $('#ded').text(' Resting, icing, and elevating the knee  ,NSAIDs -- such as ibuprofen, ketoprofen, or naproxen -- for pain and swelling  ,Treatment of an underlying condition, such as a cartilage tear or arthritis  ,Corticosteroids  ,Surgery');
            $('#dwd').text('Bakers Cyst');

        } else if (JSON.stringify(yourArray) == JSON.stringify(three)) {
            $('#ded').text('Its important to start treatment for RA with a disease-modifying antirheumatic drug (DMARD) right away to avoid more joint damage. Treatments for RA include:  ,DMARDs such as methotrexate  ,Medications that suppress the immune system  ,Corticosteroids  ,Biologic agents  ,Anti-inflammatory medications ');
            $('#dwd').text('Rheumatoid Arthritis');

        } else if (JSON.stringify(yourArray) == JSON.stringify(four)) {
            $('#ded').text('Corticosteroids  ,Drugs to suppress the immune system  ,Organ transplant for rare cases  ,Many people with sarcoidosis dont need treatment.');
            $('#dwd').text('Sarcoidosis');
        } else if (JSON.stringify(yourArray) == JSON.stringify(five)) {
            $('#ded').text('Antibiotics NSAIDs, such as ibuprofen, ketoprofen, and naproxen, for pain and swelling');
            $('#dwd').text('Lyme Disease');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two)) {
            $('#ded').text('DMARDs such as methotrexate ,Medications that suppress the immune system ,Corticosteroids ,Biologic agents ,Anti-inflammatory medications ,Physical therapy ,Surgery');
            $('#dwd').text('Sprained Ankle');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_three)) {
            $('#ded').text('Resting, icing, and elevating the ankleNSAIDs -- such as ibuprofen, ketoprofen, or naproxen -- to reduce pain and swelling A splint, cast, or brace Physical therapy Surgery to install pins, plates, screws, or rods to stabilize the ankle ');
            $('#dwd').text('Broken Ankle');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_four)) {
$('#ded').text('Rest and ice ,Anti-inflammatory medication to reduce pain and swelling ,Cortisone shots to reduce swelling ,Medication to ease symptoms and prevent attacks from occurring ');
$('#dwd').text('Pseudogout');
        } else if (JSON.stringify(yourArray) == JSON.stringify(one_five)) {
$('#ded').text('If alcohol caused your cirrhosis, the most important thing you can do is stop drinking. ,Avoid medications that may be toxic to the liver, including over-the-counter drugs. ,Hospitalization may be necessary for cirrhosis with complications.');
$('#dwd').text('Cirrhosis of the Liver');

        } else if (JSON.stringify(yourArray) == JSON.stringify(two_three)) {
$('#ded').text('Blood thinners to keep the clot from getting bigger and decrease clotting  ,Regular blood tests  ,Thrombolytic inhibitors, clot-busting medications to dissolve large clots in life-threatening situations  ,Surgery to insert a filter in a large vein, the vena cava, to prevent a clot from reaching the lungs; used in people who cant take blood-thinners ');
$('#dwd').text('Blood Clot in Legs');

        } else if (JSON.stringify(yourArray) == JSON.stringify(two_four)) {
$('#ded').text('Antibiotics (cream and oral) ,Elevating the area ,Keeping the affected area clean and dry ,Finding and removing any foreign body such as a splinter');
$('#dwd').text('Cellulitis');

        } else if (JSON.stringify(yourArray) == JSON.stringify(two_five)) {
$('#ded').text('Arthritis is a broad term that covers a group of over 100 diseases. It has everything to do with your joints -- the places where your bones connect -- such as your wrists, knees, hips, or fingers. But some types of arthritis can also affect other connective tissues and organs, including your skin.');
$('#dwd').text('Gonococcal Arthritis');

        } else if (JSON.stringify(yourArray) == JSON.stringify(three_four)) {
$('#ded').text('Keeping your legs raised while sitting or sleeping  ,Not standing a lot  ,Wearing compression stockings to improve blood flow  ,Vein-stripping surgery (removal of leg varicose veins)  ,Sclerotherapy (chemical injections to close off veins)  ,Laser surgery');
$('#dwd').text('Varicose Veins');

        } else if (JSON.stringify(yourArray) == JSON.stringify(three_five)) {
$('#ded').text('Medications to reduce swelling  ,Drugs to blunt the immune response  ,Antibiotics to kill related infections  ,Laxatives  ,Medications to control diarrhea  ,Painkillers  ,Dietary changes, such as reducing fiber  ,Dietary supplements, such as calcium and vitamin D  ,Surgery to remove damaged areas of the colon');
$('#dwd').text('Ulcerative Colitis');

        } else if (JSON.stringify(yourArray) == JSON.stringify(four_five)) {
$('#ded').text('Medications to reduce swelling ,Drugs to blunt the immune systems attack ,Antibiotics to kill infections ,Probiotics ,Medications to control diarrhea ,Painkillers ,Dietary changes ,Dietary supplements, such as calcium and vitamin D');
$('#dwd').text('Crohns Disease');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two_three)) {
$('#ded').text('Blood-pressure medications called ACE inhibitors and ARBs, which curb the pressure in your glomeruli and lower the amount of protein in your urine ,Diuretics, or water pills, to reduce swelling ,Cholesterol-lowering drugs ,Blood thinners, or anticoagulants, to make blood clots less likely');
$('#dwd').text('Nephrotic Syndrome');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two_four)) {
$('#ded').text('Mouth ulcers ,Inflammation of the eye ,Keratoderma blennorrhagica (patches of scaly skin on the palms, soles, trunk, or scalp) ,Back pain from sacroiliac (SI) joint involvement');
$('#dwd').text('Reactive Arthritis');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two_five)) {
$('#ded').text('Intravenous and oral antibiotics  ,raining the joint to eradicate infection and reduce pain  ,rthroscopy to irrigate the joint and remove dead or damaged tissue  ,pen joint surgery to drain and clean large joints ');
$('#dwd').text('Septic Arthritis');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_three_four)) {
$('#ded').text('Nonsteroidal anti-inflammatory medications such as ibuprofen (Advil, Motrin), naproxen (Aleve), or prescription NSAIDs  ,Disease modifying antirheumatic drugs (DMARDs) such as methotrexate  ,Medications that block a protein called tumor necrosis factor (TNF) ');
$('#dwd').text('Psoriatic Arthritis');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_three_five)) {
$('#ded').text('Red skin rash on the calves, ankles, or feet ,Severe abdominal pain ,Chest pain ,Achy muscles ,Constipation followed by diarrhea');
$('#dwd').text('Tuberculous Arthritis');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_four_five)) {
$('#ded').text('Rheumatic fever usually is treated with antibiotics and over-the-counter anti-inflammatory drugs. In severe cases, rheumatic fever may require cortisone or other medications to decrease inflammation in the joints and heart. If you ve developed rheumatic heart disease, surgery may be needed to repair or replace damaged heart valves.');
$('#dwd').text('Rheumatic Fever');

        } else if (JSON.stringify(yourArray) == JSON.stringify(two_three_four)) {
$('#ded').text('If tests show that you have Whipple’s disease, your doctor will give you antibiotics through an IV in your arm to kill the bacteria. They also may recommend fluids to keep you hydrated and extra vitamins and minerals to make sure you get enough nutrients. You should feel better in a couple of weeks, but it may take your small intestine up to 2 years to recover. During that time, youll continue to take antibiotics and supplements.');
$('#dwd').text('Whipple Disease');

        } else if (JSON.stringify(yourArray) == JSON.stringify(two_three_five)) {
            $('#ded').text('If you have primary hemochromatosis, doctors treat it by removing blood from your body on a regular basis. It’s a lot like donating blood. Your doctor will insert a needle into a vein in your arm or leg. The blood flows through the needle and into a tube that’s attached to a bag. The goal is to remove some of your blood so that your iron levels return to normal. This could take up to a year or more. Blood removal is divided into two parts: initial treatment and maintenance treatment.             Initial treatment. Youll visit your doctors office or a hospital once or twice a week to have your blood drawn. You may have up to a pint taken at a time.');
 ('#dwd').text('Hereditary Hemochromatosis');

        } else if (JSON.stringify(yourArray) == JSON.stringify(two_four_five)) {
            $('#ded').text('Ursodiol (Actigall, Urso), a medicine that moves bile through the liver and reduces the risk of liver scarring ,Obeticholic acid (Ocaliva), a medicine that can improve liver function when combined with Ursodiol ,Other medications, including fibrates ,Liver transplant');
            $('#dwd').text('Primary Biliary Cirrhosis');

        } else if (JSON.stringify(yourArray) == JSON.stringify(three_four_five)) {
            $('#ded').text('Rest and ice ,Anti-inflammatory medication to reduce pain and swelling ,Cortisone shots to reduce swelling ,Medication to ease symptoms and prevent attacks from occurring ');
            $('#dwd').text('Pseudogout');
        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two_three_four)) {
            $('#ded').text(' Drugs to lower uric acid levels ,Pain relievers ,Medications to stop swelling and inflammation ,Corticosteroids');
            $('#dwd').text('Gout');

        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two_three_five)) {
            $('#ded').text(' Resting, icing, and elevating the knee  ,NSAIDs -- such as ibuprofen, ketoprofen, or naproxen -- for pain and swelling  ,Treatment of an underlying condition, such as a cartilage tear or arthritis  ,Corticosteroids  ,Surgery');
            $('#dwd').text('Bakers Cyst');
        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two_four_five)) {
            $('#ded').text('Blood-pressure medications called ACE inhibitors and ARBs, which curb the pressure in your glomeruli and lower the amount of protein in your urine ,Diuretics, or water pills, to reduce swelling ,Cholesterol-lowering drugs ,Blood thinners, or anticoagulants, to make blood clots less likely');
            $('#dwd').text('Nephrotic Syndrome');
        } else if (JSON.stringify(yourArray) == JSON.stringify(one_three_four_five)) {
            $('#ded').text('Medications to reduce swelling ,Drugs to blunt the immune systems attack ,Antibiotics to kill infections ,Probiotics ,Medications to control diarrhea ,Painkillers ,Dietary changes ,Dietary supplements, such as calcium and vitamin D');
            $('#dwd').text('Crohns Disease')

        } else if (JSON.stringify(yourArray) == JSON.stringify(two_three_four_five)) {
            $('#ded').text('Blood thinners to keep the clot from getting bigger and decrease clotting  ,Regular blood tests  ,Thrombolytic inhibitors, clot-busting medications to dissolve large clots in life-threatening situations  ,Surgery to insert a filter in a large vein, the vena cava, to prevent a clot from reaching the lungs; used in people who cant take blood-thinners ');
            $('#dwd').text('Blood Clot in Legs');
        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two_three_four_five)) {
            $('#ded').text('Keeping your legs raised while sitting or sleeping  ,Not standing a lot  ,Wearing compression stockings to improve blood flow  ,Vein-stripping surgery (removal of leg varicose veins)  ,Sclerotherapy (chemical injections to close off veins)  ,Laser surgery');
            $('#dwd').text('Varicose Veins');

        } else {
            $('#ded').text('please choose enough ');
        }
    });

}