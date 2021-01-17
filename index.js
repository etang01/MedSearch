
function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("label")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function ValidateSymptomSelection()
{
    var checkboxes = document.getElementsByClassName("single-checkbox");
    var numberOfCheckedItems = 0;
    for(var i = 0; i < checkboxes.length; i++)
    {
        if(checkboxes[i].checked)
            numberOfCheckedItems++;
    }
    if(numberOfCheckedItems > 3)
    {
        alert("You can select no more than 3 symptoms.");
        return false;
    }
}

function compareSecondColumn(a, b) {
  if (a[1] === b[1]) {
      return 0;
  }
  else {
      return (a[1] > b[1]) ? -1 : 1;
  }
}
function myFunction(){
var diseaseList = [ ['Fungal infection','itching skin_rash nodal_skin_eruptions dischromic _patches']
,['Allergy', 'continuous_sneezing shivering chills watering_from_eyes']
,['GERD', 'stomach_pain acidity ulcers_on_tongue vomiting cough chest_pain']
,['Chronic cholestasis', 'itching vomiting yellowish_skin nausea loss_of_appetite abdominal_pain yellowing_of_eyes']
,['Drug Reaction', 'itching skin_rash stomach_pain burning_micturition spotting_ urination']
,['Peptic ulcer diseae', 'vomiting indigestion loss_of_appetite abdominal_pain passage_of_gases internal_itching']
,['AIDS', 'muscle_wasting patches_in_throat high_fever extra_marital_contacts']
,['Diabetes', 'fatigue weight_loss restlessness lethargy irregular_sugar_level blurred_and_distorted_vision obesity excessive_hunger increased_appetite polyuria']
,['Gastroenteritis', 'vomiting sunken_eyes dehydration diarrhea']
,['Bronchial Asthma', 'fatigue cough high_fever breathlessness family_history mucoid_sputum']
,['Hypertension', 'headache chest_pain dizziness loss_of_balance lack_of_concentration']
,['Migraine', 'acidity indigestion headache blurred_and_distorted_vision excessive_hunger stiff_neck depression irritability visual_disturbances']
,['Cervical spondylosis', 'back_pain weakness_in_limbs neck_pain dizziness loss_of_balance']
,['Paralysis (brain hemorrhage)', 'vomiting headache weakness_of_one_body_side altered_sensorium']
,['Jaundice', 'itching vomiting fatigue weight_loss high_fever yellowish_skin dark_urine abdominal_pain']
,['Malaria', 'chills vomiting high_fever sweating headache nausea diarrhea muscle_pain']
,['Chicken pox', 'itching skin_rash fatigue lethargy high_fever headache loss_of_appetite mild_fever swelled_lymph_nodes malaise red_spots_over_body']
,['Dengue', 'skin_rash chills joint_pain vomiting fatigue high_fever headache nausea loss_of_appetite pain_behind_the_eyes back_pain malaise muscle_pain red_spots_over_body']
,['Typhoid', 'chills vomiting fatigue high_fever headache nausea constipation abdominal_pain diarrhea toxic_look_(typhos) belly_pain']
,['Hepatitis A','joint_pain vomiting yellowish_skin dark_urine nausea loss_of_appetite abdominal_pain diarrhea mild_fever yellowing_of_eyes muscle_pain']
,['Hepatitis B','itching fatigue lethargy yellowish_skin dark_urine loss_of_appetite abdominal_pain yellow_urine yellowing_of_eyes malaise receiving_blood_transfusion receiving_unsterile_injections']
,['Hepatitis C','fatigue yellowish_skin nausea loss_of_appetite yellowing_of_eyes family_history']
,['Hepatitis D','joint_pain vomiting fatigue yellowish_skin dark_urine nausea loss_of_appetite abdominal_pain yellowing_of_eyes']
,['Hepatitis E','joint_pain vomiting fatigue high_fever yellowish_skin dark_urine nausea loss_of_appetite abdominal_pain yellowing_of_eyes acute_liver_failure coma stomach_bleeding']
,['Alcoholic hepatitis','vomiting yellowish_skin abdominal_pain swelling_of_stomach distention_of_abdomen history_of_alcohol_consumption fluid_overload']
,['Tuberculosis','chills vomiting fatigue weight_loss cough high_fever breathlessness sweating loss_of_appetite mild_fever yellowing_of_eyes swelled_lymph_nodes malaise phlegm chest_pain blood_in_sputum']
,['Common Cold','continuous_sneezing chills fatigue cough high_fever headache swelled_lymph_nodes malaise phlegm throat_irritation redness_of_eyes sinus_pressure runny_nose congestion chest_pain loss_of_smell muscle_pain']
,['Pneumonia','chills fatigue cough high_fever breathlessness sweating malaise phlegm chest_pain fast_heart_rate rusty_sputum']
,['Dimorphic hemmorhoids(piles)','constipation pain_during_bowel_movements pain_in_anal_region bloody_stool irritation_in_anus']
,['Heart attack','vomiting breathlessness sweating chest_pain']
,['Varicose veins','fatigue cramps	bruising obesity swollen_legs swollen_blood_vessels prominent_veins_on_calf']
,['Hypothyroidism','fatigue weight_gain cold_hands_and_feets mood_swings lethargy dizziness puffy_face_and_eyes enlarged_thyroid brittle_nails swollen_extremeties depression irritability abnormal_menstruation']
,['Hyperthyroidism','fatigue mood_swings weight_loss restlessness sweating diarrhea fast_heart_rate excessive_hunger muscle_weakness irritability abnormal_menstruation']
,['Hypoglycemia','vomiting fatigue anxiety sweating headache nausea blurred_and_distorted_vision excessive_hunger drying_and_tingling_lips slurred_speech irritability	palpitations']
,['Osteoarthristis', 'joint_pain neck_pain knee_pain hip_joint_pain swelling_joints painful_walking']
,['Arthritis','muscle_weakness stiff_neck swelling_joints movement_stiffness painful_walking']
,['(vertigo) Paroymsal  Positional Vertigo','vomiting headache nausea spinning_movements loss_of_balance unsteadiness']
,['Acne', 'skin_rash pus_filled_pimples blackheads scurring']
,['Urinary tract infection', 'burning_micturition bladder_discomfort foul_smell_of urine continuous_feel_of_urine']
,['Psoriasis','skin_rash joint_pain skin_peeling silver_like_dusting small_dents_in_nails inflammatory_nails']
,['Impetigo', 'skin_rash high_fever blister red_sore_around_nose yellow_crust_ooze']
,['COVID-19', 'headache cough breathlessness chills fatigue vomiting throat_irritation muscle_pain congestion diarrhea runny_nose loss_of_smell']
];
var diseaseWeight = [
  ['Fungal infection', 0],
  ['Allergy',0],
  ['GERD',0],
  ['Chronic cholestasis',0],
  ['Drug Reaction',0],
  ['Peptic ulcer diseae',0],
  ['AIDS',0],
  ['Diabetes',0],
  ['Gastroenteritis',0],
  ['Bronchial Asthma',0],
  ['Hypertension',0],
  ['Migraine',0],
  ['Cervical spondylosis',0],
  ['Paralysis (brain hemorrhage)',0],
  ['Jaundice',0],
  ['Malaria',0],
  ['Chicken pox',0],
  ['Dengue',0],
  ['Typhoid',0],
  ['Hepatitis A',0],
  ['Hepatitis B',0],
  ['Hepatitis C',0],
  ['Hepatitis D',0],
  ['Hepatitis E',0],
  ['Alcoholic hepatitis',0],
  ['Tuberculosis',0],
  ['Common Cold',0],
  ['Pneumonia',0],
  ['Dimorphic hemmorhoids(piles)',0],
  ['Heart attack',0],
  ['Varicose veins',0],
  ['Hypothyroidism',0],
  ['Hyperthyroidism',0],
  ['Hypoglycemia',0],
  ['Osteoarthristis',0],
  ['Arthritis',0],
  ['(vertigo) Paroymsal  Positional Vertigo',0],
  ['Acne',0],
  ['Urinary tract infection',0],
  ['Psoriasis',0],
  ['Impetigo',0],
  ['COVID-19',0]
];
for(j=0;j<sympList.length; j++)
{
  symptom=sympList[j];
  for(i=0; i<diseaseList.length; i++)
  {
      sympArray=diseaseList[i][1];
      if(sympArray.indexOf(symptom) != -1)
      {
        diseaseWeight[i][1] = diseaseWeight[i][1]+1;
      }
  }
}
  diseaseWeight.sort(compareSecondColumn);
  document.getElementById("demo").innerHTML=diseaseWeight;
}