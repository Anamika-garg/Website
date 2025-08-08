import React, { useState, useMemo } from 'react';
// Using lucide-react for modern, clean icons.
// Make sure to install it: npm install lucide-react
import { Linkedin, Twitter, Instagram } from 'lucide-react';

// --- TEAM DATA ---
// A single, clean data source for all team members. Easy to update and manage.
const teamData = [
  // Core Team
  { id: 1, name: 'Shreya Gupta', position: 'President', team: 'Core', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1742915464/IMG_0563_1_ux9w5t.jpg', socials: { linkedin: 'https://www.linkedin.com/in/shreya-gupta-0b6821255/', twitter: 'https://x.com/shregupta89?mx=2', instagram: 'https://www.instagram.com/_shreyaguptaa_/' }},
  { id: 2, name: 'Anshika Aggarwal', position: 'Vice President', team: 'Core', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/IMG-20240529-WA0002_ryj073.jpg', socials: { linkedin: 'https://www.linkedin.com/in/anshika-aggarwal-704847249/', twitter: 'https://twitter.com/kipupwidanshika', instagram: 'https://www.instagram.com/agg.anshika007' }},
  { id: 3, name: 'Sakshi Mishra', position: 'Vice President', team: 'Core', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1742915201/image_rbwjwz.jpg', socials: { linkedin: 'https://linkedin.com/in/sakshi-mishra-86618a24b', twitter: 'https://x.com/sakshimiishra', instagram: 'https://www.instagram.com/miishrasakshii/' }},
  
  // Technical Team
  { id: 4, name: 'Vidushi Agarwal', position: 'Lead', team: 'Technical', imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695661648/Asset_Mantle/Vidushi_Picture_yy5rkb.jpg', socials: { linkedin: 'https://www.linkedin.com/in/vidushi-agarwal-a95885256', twitter: 'https://x.com/Vidushit143?t=eQzBXgOJkB9VSD-3whT7WQ&s=09', instagram: 'https://www.instagram.com/agarwal.vidu/' }},
  { id: 5, name: 'Manya', position: 'Core', team: 'Technical', imageUrl: 'https://res.cloudinary.com/duptmanu9/image/upload/ar_1:1,b_rgb:ffffff,bo_12px_solid_rgb:f2af13,c_fill,g_auto,r_max,w_1000/v1717849294/Profile-Manya_xf4ehi.jpg', socials: { linkedin: 'https://www.linkedin.com/in/manya35', twitter: 'https://twitter.com/hi_manya_', instagram: 'https://www.instagram.com/simpformanya/' }},
  { id: 6, name: 'Priya Verma', position: 'Core', team: 'Technical', imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670585/Asset_Mantle/priya_eu7avc.jpg', socials: { linkedin: 'https://www.linkedin.com/in/priya-verma-9668b4291/', twitter: 'https://x.com/PriyaVe93285977', instagram: 'https://www.instagram.com/_.priyavermaa' }},
  { id: 7, name: 'Chahal Jain', position: 'Coordinator', team: 'Technical', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/ar_1:1,b_rgb:ffffff,bo_12px_solid_rgb:f2af13,c_fill,g_auto,r_max,w_1000/v1717850607/chahal_dhywcv.jpg', socials: { linkedin: 'http://www.linkedin.com/in/chahal-jain-914434279', twitter: '#', instagram: '#' }},
  { id: 8, name: 'Anamika Garg', position: 'Coordinator', team: 'Technical', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/ar_1:1,b_rgb:ffffff,bo_12px_solid_rgb:f2af13,c_fill,g_auto,r_max,w_1000/v1717850875//WhatsApp_Image_2025-03-24_at_9.50.54_PM_u4pjxg.jpg', socials: { linkedin: 'https://www.linkedin.com/in/anamika-garg-aa14a5300/', twitter: 'https://x.com/AnamikaGarg29', instagram: 'https://instagram.com/akimana_fr' }},
  { id: 9, name: 'Bhumi Gupta', position: 'Coordinator', team: 'Technical', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/ar_1:1,b_rgb:ffffff,bo_12px_solid_rgb:f2af13,c_fill,g_auto,r_max,w_1000/v1717850875/IMG_20240316_182633_011_bi9lm9.jpg', socials: { linkedin: 'http://www.linkedin.com/in/guptabhumi2005', twitter: 'https://x.com/BhumiGupta81010', instagram: 'https://instagram.com/spk2bhumi' }},
  { id: 10, name: 'Ananya Verma', position: 'Coordinator', team: 'Technical', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/ar_1:1,b_rgb:ffffff,bo_12px_solid_rgb:f2af13,c_fill,g_auto,r_max,w_1000/v1717850875/IMG_20240908_150247_nplmqm.jpg', socials: { linkedin: 'http://www.linkedin.com/in/ananyaverma23', twitter: '#', instagram: 'https://instagram.com/a_nnie_99' }},

  // Event Management Team
  { id: 11, name: 'Shaivi Goel', position: 'Lead', team: 'Events', imageUrl: 'https://res.cloudinary.com/dlx9sj1pl/image/upload/ar_1:1,b_rgb:ffffff,bo_12px_solid_rgb:f2af13,c_fill,g_auto,r_max,w_1000/v1717858468/assetmerkle_Shaivi_p2ims7.jpg', socials: { linkedin: 'https://www.linkedin.com/in/shaivi-goel-b14160245', twitter: 'https://x.com/shaizvanchutney', instagram: 'https://www.instagram.com/shaivigoel_/' }},
  { id: 12, name: 'Sripriya Agarwal', position: 'Lead', team: 'Events', imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1688489578/Asset%20Mantle%20-%20Team%202023/Outreachy/Sripriya%20Agarwal.jpg', socials: { linkedin: 'https://www.linkedin.com/in/sripriya-agarwal-483475261', twitter: 'https://x.com/Agarwa1Sripriya', instagram: 'https://www.instagram.com/sripriyaagarwal16/' }},
  { id: 13, name: 'Palak', position: 'Core', team: 'Events', imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670259/Asset_Mantle/IMG_20230921_135918_jfazmg.jpg', socials: { linkedin: 'https://www.linkedin.com/in/palak-bansal-3b6666283', twitter: 'https://twitter.com/palakbansl26', instagram: 'https://instagram.com/palak_16876' }},
  { id: 14, name: 'Avni', position: 'Core', team: 'Events', imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1688490160/Asset%20Mantle%20-%20Team%202023/EM/Avni%20Singh.jpg', socials: { linkedin: 'https://www.linkedin.com/in/avni-singh-723700259', twitter: 'https://twitter.com/avnisingh023', instagram: 'https://www.instagram.com/avnii.singh_/' }},
  { id: 15, name: 'Ridhima Choudhary', position: 'Core', team: 'Events', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1742915747/ridhima_rzc5go.jpg', socials: { linkedin: 'https://www.linkedin.com/in/ridhima-choudhary-774a8b287', twitter: '#', instagram: 'https://instagram.com/rridhimaaaa' }},
  { id: 16, name: 'Deepika', position: 'Core', team: 'Events', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1742915747/deepika_ynjfow.jpg', socials: { linkedin: 'https://www.linkedin.com/in/deepika-3903a5288', twitter: 'https://x.com/@frDeepika', instagram: 'https://instagram.com/deepika._.919' }},
  { id: 17, name: 'Prerana Arya', position: 'Core', team: 'Events', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670256/WhatsApp_Image_2025-03-25_at_12.10.20_AM_smxbpd.jpg', socials: { linkedin: 'https://www.linkedin.com/in/prerana-arya-84b020283/', twitter: 'https://x.com/@PreranaSays', instagram: 'https://instagram.com/11prer.a.na/' }},
  { id: 18, name: 'Shaivi Jain', position: 'Coordinator', team: 'Events', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670259/shavi_lomval.jpg', socials: { linkedin: 'https://www.linkedin.com/in/shaivi-jain-86937a321', twitter: '#', instagram: 'https://instagram.com/shaivi1706' }},
  { id: 19, name: 'Manupreet Kaur', position: 'Coordinator', team: 'Events', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1742915747/manu_sssyb3.jpg', socials: { linkedin: 'https://www.linkedin.com/in/manupreet-kaur-9a69b0324', twitter: 'https://x.com/@manupreet2307', instagram: '#' }},
  { id: 20, name: 'Anuradha Singla', position: 'Coordinator', team: 'Events', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1742915747/Screenshot_2025-03-25_222104_hnfmyh.png', socials: { linkedin: 'https://www.linkedin.com/in/anuradha-singla-558a9b2a1', twitter: 'https://x.com/@Anuradha490586', instagram: '#' }},
  { id: 21, name: 'Anoushka Jha', position: 'Coordinator', team: 'Events', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670259/anoushka_j6bvwe.jpg', socials: { linkedin: 'https://www.linkedin.com/in/anoushka-jha', twitter: '#', instagram: '#' }},
  { id: 22, name: 'Ritika Sharma', position: 'Coordinator', team: 'Events', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670259/ritika_kztxar.jpg', socials: { linkedin: 'https://www.linkedin.com/in/ritika-sharma-54b25924a', twitter: 'https://x.com/@RitikaS31140365', instagram: '#' }},
  { id: 23, name: 'Twinkle', position: 'Coordinator', team: 'Events', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1742915745/twinkle_hnmzvx.jpg', socials: { linkedin: 'https://www.linkedin.com/in/twinkle-b4b26a321', twitter: 'https://x.com/@twinkle1428', instagram: '#' }},
  { id: 24, name: 'Saie Pawar', position: 'Coordinator', team: 'Events', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670259/saie_ik65xl.jpg', socials: { linkedin: 'https://www.linkedin.com/in/saie-pawar-96b27a262', twitter: 'https://x.com/@Saie__Pawar', instagram: '#' }},
  { id: 25, name: 'Shreya Rathore', position: 'Coordinator', team: 'Events', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670259/shreya_nmkaqc.jpg', socials: { linkedin: 'https://www.linkedin.com/in/shreya-rathore-135785265', twitter: '#', instagram: '#' }},
  { id: 26, name: 'Ananshi Nayak', position: 'Coordinator', team: 'Events', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670259/ananshi_sm23e5.jpg', socials: { linkedin: 'https://www.linkedin.com/in/ananshi-nayak-69a19b327', twitter: 'https://x.com/@ananshi_nayak', instagram: '#' }},
  { id: 27, name: 'Disha Gupta', position: 'Coordinator', team: 'Events', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1742915747/Disha_Photo_nu2qt1.jpg', socials: { linkedin: 'https://www.linkedin.com/in/disha-gupta-343880328', twitter: 'https://x.com/@DishaGupta39677', instagram: '#' }},

  // Research Team
  { id: 28, name: 'Srishneet Kaur', position: 'Lead', team: 'Research', imageUrl: 'https://res.cloudinary.com/dlx9sj1pl/image/upload/ar_1:1,b_rgb:ffffff,bo_12px_solid_rgb:f2af13,c_fill,g_auto,r_max,w_1000/v1717859161/Picture_a8gz7j.png', socials: { linkedin: 'https://www.linkedin.com/in/srishneet-kaur-59a924263', twitter: 'https://x.com/skm85636356', instagram: 'https://www.instagram.com/call_me_kaurr/' }},
  { id: 29, name: 'Sakshi Singh', position: 'Lead', team: 'Research', imageUrl: 'https://res.cloudinary.com/dlx9sj1pl/image/upload/ar_1:1,b_rgb:ffffff,bo_12px_solid_rgb:f2af13,c_fill,g_auto,r_max,w_1000/v1717859243/IMG_20240602_235835_ooaqoe.jpg', socials: { linkedin: 'https://www.linkedin.com/in/sakshi-singh-1661b426b/', twitter: 'https://x.com/Sak_2518', instagram: 'https://www.instagram.com/_sakshi2518_/' }},
  { id: 30, name: 'Mehak Garg', position: 'Core', team: 'Research', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695756709/image_yatzxo.jpg', socials: { linkedin: 'https://www.linkedin.com/in/mehak-garg-084642282', twitter: '#', instagram: 'https://www.instagram.com/mehak.garg05/' }},
  { id: 31, name: 'Anjali Sharma', position: 'Core', team: 'Research', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695756710/pictureee_nqnhxa.jpg', socials: { linkedin: 'https://www.linkedin.com/in/anjali-sharma-159054288', twitter: 'https://x.com/anjalii64', instagram: 'https://instagram.com/thatpixelmiss' }},
  { id: 32, name: 'Aditi Gupta', position: 'Coordinator', team: 'Research', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670259/aditi_dgskwg.jpg', socials: { linkedin: 'https://www.linkedin.com/in/aditi-gupta-464024324', twitter: 'https://x.com/Aditi21gupta', instagram: 'https://instagram.com/kabhikabhi_adiiti' }},
  { id: 33, name: 'Suhaani Agarwal', position: 'Coordinator', team: 'Research', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670259/suhaani_s5qa60.jpg', socials: { linkedin: 'https://www.linkedin.com/in/suhaani-agarwal-010a0a280', twitter: 'https://x.com/suhaaniag07', instagram: 'https://instagram.com/suhaani0707' }},
  { id: 34, name: 'Kritika Singh', position: 'Coordinator', team: 'Research', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670259/kritika_luccmz.jpg', socials: { linkedin: 'https://www.linkedin.com/in/kritika-singh-758b95322', twitter: 'https://x.com/Kritika32717391', instagram: 'https://instagram.com/ks_.1220' }},
  { id: 35, name: 'Swati Singh', position: 'Coordinator', team: 'Research', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670259/swati_ts77zp.jpg', socials: { linkedin: 'https://www.linkedin.com/in/swati-singh-6031a4292', twitter: 'https://x.com/Swati_2104', instagram: 'https://instagram.com/swatiii_64' }},
  { id: 36, name: 'Sargam Sharma', position: 'Coordinator', team: 'Research', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670259/sargam_rrqgbb.jpg', socials: { linkedin: 'https://www.linkedin.com/in/er-sargam-sharma', twitter: '#', instagram: '#' }},
  { id: 37, name: 'Bhanvi Narang', position: 'Coordinator', team: 'Research', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670259/bhanvi_cg4xna.jpg', socials: { linkedin: 'https://www.linkedin.com/in/bhanvi-narang-979639248/', twitter: 'https://x.com/bhanvi_narang', instagram: 'https://instagram.com/bhanvi_narang' }},
  { id: 38, name: 'Tisya Jaitley', position: 'Coordinator', team: 'Research', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670259/Screenshot_2025-03-25_225759_bbhdsl.png', socials: { linkedin: '#', twitter: '#', instagram: 'https://instagram.com/Tisya_xoxo' }},
  
  // Media Team
  { id: 39, name: 'Ayushi Gupta', position: 'Lead', team: 'Media', imageUrl: 'https://res.cloudinary.com/dpeurcgui/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1724788566/ayushi_media_pic_jnx8in.jpg', socials: { linkedin: 'https://www.linkedin.com/in/ayushi-gupta-2b6a03262/', twitter: '#', instagram: 'https://www.instagram.com/_ayushii_guptaa/' }},
  { id: 40, name: 'Jiya Malik', position: 'Lead', team: 'Media', imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1693724868/Asset%20Mantle%20-%20Team%202023/Graphics%20and%20Media/Photo_kgni52.jpg', socials: { linkedin: 'https://www.linkedin.com/in/jiya-malik-689774253', twitter: 'https://twitter.com/Jiyamalik183245', instagram: 'https://www.instagram.com/jiya.malik06/' }},
  { id: 41, name: 'Anusha Arora', position: 'Core', team: 'Media', imageUrl: 'https://res.cloudinary.com/dlx9sj1pl/image/upload/ar_1:1,b_rgb:ffffff,bo_12px_solid_rgb:f2af13,c_fill,g_auto,r_max,w_1000/v1717859478/f0d11246-336f-4aa6-91d9-8b6f7d94a23f_shtsrl.jpg', socials: { linkedin: 'https://www.linkedin.com/in/anusha-arora-23a75228a/', twitter: '#', instagram: '#' }},
  { id: 42, name: 'Tripti Jaiswal', position: 'Core', team: 'Media', imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1688490606/Asset%20Mantle%20-%20Team%202023/Graphics%20and%20Media/Tripti%20Jaiswal.jpg', socials: { linkedin: 'https://www.linkedin.com/in/tripti-jaiswal-898472257/', twitter: 'https://twitter.com/triptijaiswall', instagram: 'https://www.instagram.com/triptiijaiswal/' }},
  { id: 43, name: 'Shreya Gupta', position: 'Core', team: 'Media', imageUrl: 'https://res.cloudinary.com/dlx9sj1pl/image/upload/ar_1:1,b_rgb:ffffff,bo_12px_solid_rgb:f2af13,c_fill,g_auto,r_max,w_1000/v1717859527/Photo_from_Shreya_Gupta_l7d5tu.jpg', socials: { linkedin: 'https://www.linkedin.com/in/shreya-gupta-a783b9270', twitter: 'https://x.com/S_hreya17', instagram: 'https://www.instagram.com/s_hreya173' }},
  { id: 44, name: 'Mahak', position: 'Core', team: 'Media', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/ar_1:1,b_rgb:ffffff,bo_12px_solid_rgb:f2af13,c_fill,g_auto,r_max,w_1000/v1717859527/Mahak_AM_kv4kgj.jpg', socials: { linkedin: 'https://www.linkedin.com/in/mahak-154720287/', twitter: 'https://x.com/Mahak0520', instagram: '#' }},
  { id: 45, name: 'Priyanshi', position: 'Core', team: 'Media', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695672367/priyanshi_cuuz7x.jpg', socials: { linkedin: 'www.linkedin.com/in/priyanshi-roy-a67825201', twitter: 'https://x.com/phiandrho', instagram: '#' }},
  { id: 46, name: 'Mehar Kapoor', position: 'Coordinator', team: 'Media', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695672367/mehar_kvevsp.jpg', socials: { linkedin: 'https://linkedin.com/in/mehar-kapoor-428802214/', twitter: '#', instagram: 'https://www.instagram.com/mehar_kapoor7/' }},
  { id: 47, name: 'Aakriti Shakya', position: 'Coordinator', team: 'Media', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695672367/akriti_b3h3zd.jpg', socials: { linkedin: 'https://www.linkedin.com/in/aakriti-shakya-a826b8275', twitter: 'https://x.com/aakritishakya9', instagram: 'https://www.instagram.com/aakritishakya9' }},
  { id: 48, name: 'Diya Kotru', position: 'Coordinator', team: 'Media', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695672367/diya_a73a8v.jpg', socials: { linkedin: 'https://www.linkedin.com/in/diya-kotru-9059a2322', twitter: 'https://x.com/DiyaKotru137', instagram: 'https://www.instagram.com/kotrudiya' }},
  { id: 49, name: 'Tanisha Ojha', position: 'Coordinator', team: 'Media', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695672367/tanisha_merlrx.jpg', socials: { linkedin: 'https://www.linkedin.com/in/tanisha-ojha-6bb1b0203', twitter: 'https://x.com/TanishaOjha99', instagram: 'https://www.instagram.com/tanishaaaa_3' }},
  { id: 50, name: 'Navya', position: 'Coordinator', team: 'Media', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695672367/nnnnnnnn_t3exs6.jpg', socials: { linkedin: '#', twitter: '#', instagram: 'https://www.instagram.com/navyajaint' }},

  // Outreach Team
  { id: 51, name: 'Shruti Jha', position: 'Lead', team: 'Outreach', imageUrl: 'https://res.cloudinary.com/dlx9sj1pl/image/upload/ar_1:1,b_rgb:ffffff,bo_12px_solid_rgb:f2af13,c_fill,g_auto,r_max,w_1000/v1717859596/picture_for_AM_k08emn.jpg', socials: { linkedin: 'https://www.linkedin.com/in/shruti-jha-28b4b5255', twitter: 'https://x.com/Shruti_Jha6', instagram: 'https://www.instagram.com/shuru_iti/' }},
  { id: 52, name: 'Sonasha Choudhary', position: 'Core', team: 'Outreach', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/ar_1:1,b_rgb:ffffff,bo_12px_solid_rgb:f2af13,c_fill,g_auto,r_max,w_1000/v1717859643/IMG_20240529_004615_328_gf6l5g.jpg', socials: { linkedin: 'https://www.linkedin.com/in/sonasha-choudhary-5a9274298', twitter: 'https://twitter.com/Sonasha99', instagram: 'https://www.instagram.com/sonashaaa_08/' }},
  { id: 53, name: 'Vaishnavi', position: 'Core', team: 'Outreach', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/ar_1:1,b_rgb:ffffff,bo_12px_solid_rgb:f2af13,c_fill,g_auto,r_max,w_1000/v1717859643/profile_pic_bwz9q6.jpg', socials: { linkedin: 'https://www.linkedin.com/in/vaishnavi-kataria-bb91b5288/', twitter: 'https://x.com/vaishnaviv69071', instagram: 'https://www.instagram.com/vaishnavikataria1510/' }},
  { id: 54, name: 'Anaya', position: 'Core', team: 'Outreach', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/ar_1:1,b_rgb:ffffff,bo_12px_solid_rgb:f2af13,c_fill,g_auto,r_max,w_1000/v1717859643/picture_vtb8hj.jpg', socials: { linkedin: 'https://www.linkedin.com/in/anaya-jain-4a5715288', twitter: 'https://twitter.com/AnayaJa48981116', instagram: 'https://www.instagram.com/10.anayajain' }},
  { id: 55, name: 'Pari Gupta', position: 'Coordinator', team: 'Outreach', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670259/Pic_dydqgj.jpg', socials: { linkedin: 'www.linkedin.com/in/pari-gupta-05401b283', twitter: 'https://x.com/PariGupta784429', instagram: 'https://instagram.com/pariig3' }},
  { id: 56, name: 'Tulip', position: 'Coordinator', team: 'Outreach', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695672367/tulip_swx7su.jpg', socials: { linkedin: 'www.linkedin.com/in/tulip-gupta-292661328', twitter: 'https://x.com/tulipp_19', instagram: 'https://www.instagram.com/_tulip.15_' }},
  { id: 57, name: 'Vani Tyagi', position: 'Coordinator', team: 'Outreach', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1742916432/Screenshot_2025-03-25_191201_nu1w2o.png', socials: { linkedin: 'https://www.linkedin.com/in/vani-tyagi-5a4440328/', twitter: 'https://x.com/tyagi806_vani', instagram: 'https://www.instagram.com/vanityagi.8/' }},
  { id: 58, name: 'Akshita', position: 'Coordinator', team: 'Outreach', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695672367/akshita_oo3r39.jpg', socials: { linkedin: 'https://www.linkedin.com/in/akshita-tanwar-939a04321', twitter: 'https://x.com/Akshita47246470', instagram: 'https://www.instagram.com/akshita.t9' }},
  { id: 59, name: 'Anupriya', position: 'Coordinator', team: 'Outreach', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1742916431/20240918_233205_b4d9lm.jpg', socials: { linkedin: 'https://www.linkedin.com/in/anupriya-7a8584322', twitter: 'https://x.com/Anu_heree', instagram: 'https://www.instagram.com/anu.heree' }},
  { id: 60, name: 'Naincy Yadav', position: 'Coordinator', team: 'Outreach', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695672367/nancy_jvlhab.jpg', socials: { linkedin: 'https://www.linkedin.com/in/naincy-yadav-3a63a7263', twitter: 'https://x.com/@yd_naincy005', instagram: '#' }},
  { id: 61, name: 'Lavanya Arora', position: 'Coordinator', team: 'Outreach', imageUrl: 'https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695672367/ProfilePic_tlkcwj.jpg', socials: { linkedin: 'https://www.linkedin.com/in/lavanya-arora-757412320', twitter: '#', instagram: 'https://www.instagram.com/its_lavanya_749' }},
];

// --- HELPER FUNCTION to group team members by their position ---
const groupTeamByPosition = (team) => {
  return team.reduce((acc, member) => {
    const { position } = member;
    if (!acc[position]) {
      acc[position] = [];
    }
    acc[position].push(member);
    return acc;
  }, {});
};

// --- Individual Team Member Card Component ---
const TeamMemberCard = ({ member }) => {
  return (
    <div className="group relative flex flex-col items-center text-center p-6 bg-gray-900/70 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-lg transition-all duration-500 hover:bg-gray-800/80 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/20 transform hover:-translate-y-2 w-full max-w-xs">
      <div className="relative">
        <img
          src={member.imageUrl}
          alt={`Profile of ${member.name}`}
          className="w-32 h-32 rounded-full object-cover shadow-md border-4 border-gray-700 group-hover:border-indigo-500 transition-colors duration-300"
          onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/128x128/1F2937/FFFFFF?text=Image'; }}
        />
      </div>
      <h3 className="mt-4 text-2xl font-bold text-white">{member.name}</h3>
      <p className="mt-1 text-indigo-400 font-medium">{member.position}</p>
      <div className="flex items-center justify-center gap-4 mt-5 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
        {member.socials.linkedin && <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400"><Linkedin size={24} /></a>}
        {member.socials.twitter && <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400"><Twitter size={24} /></a>}
        {member.socials.instagram && <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400"><Instagram size={24} /></a>}
      </div>
    </div>
  );
};

// --- Main App Component ---
export default function Teams() {
  const teams = useMemo(() => ['Core', 'Technical', 'Events', 'Media', 'Research', 'Outreach'], []);
  const [activeTab, setActiveTab] = useState(teams[0]);

  const filteredTeam = useMemo(() => teamData.filter(member => member.team === activeTab), [activeTab]);
  const groupedTeam = groupTeamByPosition(filteredTeam);
  
  // Define the desired order of positions
  const positionHierarchy = [
    'President',
    'Vice President',
    'Lead',
    'Core',
    'Coordinator'
  ];

  const positionOrder = useMemo(() => {
    const orderedKeys = Object.keys(groupedTeam).sort((a, b) => {
        const indexA = positionHierarchy.indexOf(a);
        const indexB = positionHierarchy.indexOf(b);
        // If a position is not in the hierarchy, push it to the end
        if (indexA === -1) return 1;
        if (indexB === -1) return -1;
        return indexA - indexB;
    });
    return orderedKeys;
  }, [groupedTeam]);

  // Style for the subtle dot pattern background
  const BackgroundPattern = () => (
    <div className="absolute inset-0 z-0 opacity-20" style={{
      backgroundImage: 'radial-gradient(circle at 1px 1px, #4a5568 1px, transparent 0)',
      backgroundSize: '2rem 2rem'
    }}></div>
  );

  return (
    <div className="relative bg-black text-white min-h-screen font-sans overflow-x-hidden">
      <BackgroundPattern />
      <div className="relative z-10 container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Meet The Team
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            The passionate individuals driving our vision forward.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-2 -mx-4 px-4">
          <div className="flex flex-nowrap border-b border-gray-800">
            {teams.map(team => (
              <button
                key={team}
                onClick={() => setActiveTab(team)}
                className={`flex-shrink-0 px-4 sm:px-6 py-3 text-sm sm:text-base font-medium transition-colors duration-300 relative whitespace-nowrap ${
                  activeTab === team
                    ? 'text-indigo-400'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {team} Team
                {activeTab === team && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500 rounded-full"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Team Display */}
        <div className="space-y-16">
          {positionOrder.map(position => (
            <section key={position}>
              <h2 className="text-3xl font-bold text-center mb-10 text-gray-300">{position}</h2>
              <div className="flex flex-wrap justify-center items-stretch gap-8 md:gap-10">
                {groupedTeam[position].map(member => (
                  <TeamMemberCard key={member.id} member={member} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
