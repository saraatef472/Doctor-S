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
            $('#ded').text('Making dietary changes  ,Eating probiotics, helpful bacteria found in some yogurts and kefir  ,Taking fiber supplements  ,Avoiding caffeine  ,Reducing stress ');
            $('#dwd').text('Irritable Bowel Syndrome');

        } else if (JSON.stringify(yourArray) == JSON.stringify(two)) {
            $('#ded').text('Treatment for heartburn and GERD usually begins with over-the-counter antacids and medications to help reduce stomach acid. You also may want to avoid the foods and drinks that make your symptoms worse. If these treatments dont relieve symptoms, you may need prescription medications, surgery, or other procedures.');
            $('#dwd').text('Heartburn/GERD');
        } else if (JSON.stringify(yourArray) == JSON.stringify(three)) {
            $('#ded').text('Cholecystitis can mimic other health problems, so you’ll need to see a doctor for a diagnosis. ,You might feel a sharp, sudden pain in the upper right side of your belly. You may also feel pain in your back or below your right shoulder blade. Deep breaths may make it worse. Some other symptoms to watch out for include: ,Nausea ,Vomiting ,Fever ,Bloating');
            $('#dwd').text('Acute Cholecystitis');
        } else if (JSON.stringify(yourArray) == JSON.stringify(four)) {
            $('#ded').text('Beans ,Vegetables (especially broccoli, cabbage, and onions) ,Fruits ,Dairy products ,Whole-grain foods');
            $('#dwd').text('Gas');
        } else if (JSON.stringify(yourArray) == JSON.stringify(five)) {
            $('#ded').text('Bloated feeling ,Burping ,Lack of appetite or weight loss ,Nausea ,Bloody or dark poop ,Vomiting');
            $('#dwd').text('Gastric Ulcer');
        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two)) {
            $('#ded').text('Avoiding dairy products  ,Using lactase supplements  ,Drinking lactose-free milk');
            $('#dwd').text('Lactose Intolerance');
        } else if (JSON.stringify(yourArray) == JSON.stringify(one_three)) {
            $('#ded').text('Antacids  ,Acid-suppressing medications (proton pump inhibitors and H2 blockers)  ,Bland diet  ,Avoiding alcohol and tobacco');
            $('#dwd').text('Gastritis');
        } else if (JSON.stringify(yourArray) == JSON.stringify(one_four)) {
            $('#ded').text('The only treatment for celiac disease is a gluten-free diet.');
            $('#dwd').text('Celiac Disease');
        } else if (JSON.stringify(yourArray) == JSON.stringify(one_five)) {
            $('#ded').text('Surgery to remove the gallbladder, often done using a scope.  ,Dissolving gallstones with medication (stones often return if not treated with surgery) ,Using ultrasound shock waves to break up gallstones');
            $('#dwd').text('Gallstones');
        } else if (JSON.stringify(yourArray) == JSON.stringify(two_three)) {
            $('#ded').text('Giardiasis may get better on its own in two to four weeks. However, antibiotics and anti-parasite medications can shorten symptoms.');
            $('#dwd').text('Giardiasis');
        } else if (JSON.stringify(yourArray) == JSON.stringify(two_four)) {
            $('#ded').text('Liquid diet during attacks  ,Antibiotics  ,Surgery, for severe cases  ,High-fiber diet once the infection has gone');
            $('#dwd').text('Diverticulitis');
        } else if (JSON.stringify(yourArray) == JSON.stringify(two_five)) {
            $('#ded').text('Antibiotics  ,Acid-suppressing medications  ,Antacids  ,Diet ');
            $('#dwd').text('Peptic Ulcer');
        } else if (JSON.stringify(yourArray) == JSON.stringify(three_four)) {
            $('#ded').text('Abdominal tenderness or distention ,Chills ,Fever ,Fluid in the abdomen ,Not passing any urine, or passing significantly less urine than usual');
            $('#dwd').text('Peritonitis');
        } else if (JSON.stringify(yourArray) == JSON.stringify(three_five)) {
            $('#ded').text('The primary treatment for a food allergy is complete avoidance of the foods that cause the allergic reaction. The doctor may refer you to an allergy specialist to help you identify what is causing your allergic reactions and learn how to avoid it. If you have a severe allergy, you need to be ready to treat a severe reaction. That means you may need to always carry a syringe of epinephrine (Adrenaclick, Auvi-Q, EpiPen, Symjepi) and know how to administer it.');
            $('#dwd').text('Food Allergy');
        } else if (JSON.stringify(yourArray) == JSON.stringify(four_five)) {
            $('#ded').text('Medications to reduce swelling  ,Drugs to blunt the immune response  ,Antibiotics to kill related infections  ,Laxatives  ,Medications to control diarrhea  ,Painkillers  ,Dietary changes, such as reducing fiber  ,Dietary supplements, such as calcium and vitamin D ');
            $('#dwd').text('Ulcerative Colitis');
        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two_three)) {
            $('#ded').text('Medications to reduce swelling ,Drugs to blunt the immune system s attack ,Antibiotics to kill infections ,Probiotics ,Medications to control diarrhea');
            $('#dwd').text('Crohns Disease');
        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two_four)) {
            $('#ded').text('Anti-nausea medications and other treatments help relieve symptoms in people with acute hepatitis B. Your doctor may suggest avoiding certain medications that are toxic to the liver while you are recovering. If you develop chronic hepatitis B, your doctor will monitor your liver and determine if and when you need treatment with antiviral medications.');
            $('#dwd').text('Hepatitis B');
        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two_five)) {
            $('#ded').text('Treatment for cirrhosis depends on the cause of the disease and whether complications are present. The goals of treatment are to slow the progression of scar tissue in the liver and prevent or treat the complications of the disease. ,If alcohol caused your cirrhosis, the most important thing you can do is stop drinking. ,Avoid medications that may be toxic to the liver, including over-the-counter drugs. ,Hospitalization may be necessary for cirrhosis with complications.');
            $('#dwd').text('Cirrhosis of the Liver');
        } else if (JSON.stringify(yourArray) == JSON.stringify(one_three_four)) {
            $('#ded').text('Cognitive-behavioral therapy  ,Medications, including antidepressants and anti-anxiety medications  ,Support groups');
            $('#dwd').text('Generalized Anxiety Disorder');
        } else if (JSON.stringify(yourArray) == JSON.stringify(one_three_five)) {
            $('#ded').text('Genital herpes is usually treated with antiviral medications. You may take these drugs only when you feel an outbreak starting or you may take them every day.');
            $('#dwd').text('Genital Herpes (Male)');
        } else if (JSON.stringify(yourArray) == JSON.stringify(one_four_five)) {
            $('#ded').text('Surgery is the first choice for treating pancreatic cancer. However, for many patients, surgery is not possible because of where the tumor is located or because it has spread beyond the pancreas. If surgery is not an option, your doctor may recommend chemotherapy (drugs that kill cancer cells) or radiation therapy. Even if you are a candidate for surgery, your doctor may recommend chemotherapy to kill any remaining cancer cells. ');
            $('#dwd').text('Pancreatic Cancer');
        } else if (JSON.stringify(yourArray) == JSON.stringify(two_three_four)) {
            $('#ded').text('Pyloric stenosis is treated with surgery to fix the thickening of the pylorus.            ');
            $('#dwd').text('Pyloric Stenosis');
        } else if (JSON.stringify(yourArray) == JSON.stringify(two_three_five)) {
            $('#ded').text('Exocrine pancreatic insufficiency (EPI) causes problems in how you digest food. Your pancreas doesnt make enough of the enzymes that your body needs to break down and absorb nutrients.            Enzymes speed up chemical reactions in your body. The enzymes made by your pancreas move into your small intestine, where they help break down the food you eat.');
            $('#dwd').text('Exocrine Pancreatic Insufficiency');
        } else if (JSON.stringify(yourArray) == JSON.stringify(two_four_five)) {
            $('#ded').text('Pyloric stenosis is treated with surgery to fix the thickening of the pylorus.            ');
            $('#dwd').text('Pyloric Stenosis');
        } else if (JSON.stringify(yourArray) == JSON.stringify(three_four_five)) {
            $('#ded').text('Genital herpes is usually treated with antiviral medications. You may take these drugs only when you feel an outbreak starting or you may take them every day.');
            $('#dwd').text('Genital Herpes (Male)');
        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two_three_four)) {
            $('#ded').text('Surgery to remove the gallbladder, often done using a scope.  ,Dissolving gallstones with medication (stones often return if not treated with surgery) ,Using ultrasound shock waves to break up gallstones');
            $('#dwd').text('Gallstones');
        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two_three_five)) {
            $('#ded').text('Making dietary changes  ,Eating probiotics, helpful bacteria found in some yogurts and kefir  ,Taking fiber supplements  ,Avoiding caffeine  ,Reducing stress ');
            $('#dwd').text('Irritable Bowel Syndrome');
        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two_four_five)) {
            $('#ded').text('Antacids  ,Acid-suppressing medications (proton pump inhibitors and H2 blockers)  ,Bland diet  ,Avoiding alcohol and tobacco');
            $('#dwd').text('Gastritis');
        } else if (JSON.stringify(yourArray) == JSON.stringify(one_three_four_five)) {
            $('#ded').text('Surgery is the first choice for treating pancreatic cancer. However, for many patients, surgery is not possible because of where the tumor is located or because it has spread beyond the pancreas. If surgery is not an option, your doctor may recommend chemotherapy (drugs that kill cancer cells) or radiation therapy. Even if you are a candidate for surgery, your doctor may recommend chemotherapy to kill any remaining cancer cells. ');
            $('#dwd').text('Pancreatic Cancer');
        } else if (JSON.stringify(yourArray) == JSON.stringify(two_three_four_five)) {
            $('#ded').text('Medications to reduce swelling  ,Drugs to blunt the immune response  ,Antibiotics to kill related infections  ,Laxatives  ,Medications to control diarrhea  ,Painkillers  ,Dietary changes, such as reducing fiber  ,Dietary supplements, such as calcium and vitamin D ');
            $('#dwd').text('Ulcerative Colitis');
        } else if (JSON.stringify(yourArray) == JSON.stringify(one_two_three_four_five)) {
            $('#ded').text('The primary treatment for a food allergy is complete avoidance of the foods that cause the allergic reaction. The doctor may refer you to an allergy specialist to help you identify what is causing your allergic reactions and learn how to avoid it. If you have a severe allergy, you need to be ready to treat a severe reaction. That means you may need to always carry a syringe of epinephrine (Adrenaclick, Auvi-Q, EpiPen, Symjepi) and know how to administer it.');
            $('#dwd').text('Food Allergy');
        } else {
            $('#ded').text('no');

        }
    });

}