let busDB = [
	'1 - ถนนตก - สนามหลวง',
	'2 - สำโรง - ปากคลองตลาด',
	'3 - หมอชิต 2 - คลองสาน',
	'4 - ท่าเรือคลองเตย - ท่าน้ำภาษีเจริญ',
	'5 - วงศ์สว่าง - จักรวรรดิ์',
	'6 - พระประแดง - บางลำพู',
	'7 - คลองขวาง - หัวลำโพง',
	'7ก - พุทธมณฑลสาย2 - พาหุรัด',
	'8 - แฮปปี้แลนด์ - สะพานพุทธ',
	'9 - กัลปพฤกษ์ - สถานีสามเสน',
	'11 - ประเวศ - มาบุญครอง',
	'12 - ห้วยขวาง - ปากคลองตลาด',
	'13 - คลองเตย - ห้วยขวาง',
	'14 - ศรีย่าน - สวนลุมพินี',
	'15 - BRTราชพฤกษ์ - สนามหลวง',
	'16 - หมอชิต2 - สุรวงศ์',
	'17 - เคหะธนบุรี - เพลินจิต',
	'18 - ท่าอิฐ - อนุสาวรีย์ชัยฯ',
	'20 - เจดีย์ - ท่าดินแดง',
	'21 - วัดคู่สร้าง - จุฬาฯ',
	'22 - สวนสยาม - อาคารทีพีไอ',
	'23 - สำโรง - เทเวศร์',
	'24 - ประชานิเวศน์ 3 - อนุสาวรีย์ชัยฯ',
	'25 - ปากน้ำ - ท่าช้าง',
	'26 - มีนบุรี - อนุสาวรีย์ชัยฯ',
	'26ก - มีนบุรี - เอกมัย',
	'27 - มีนบุรี - อนุสาวรีย์ชัยฯ',
	'28 - สายใต้ใหม่ - รัชโยธิน',
	'29 - รังสิต - หัวลำโพง',
	'30 - ท่าน้ำนนทบุรี - สายใต้เก่า',
	'32 - ปากเกร็ด - วัดโพธิ์',
	'33 - ปทุมธานี - สนามหลวง',
	'34 - รังสิต - หัวลำโพง',
	'35 - สามแยกพระประแดง - สายใต้ใหม่',
	'36 - ห้วยขวาง - ท่าน้ำสี่พระยา',
	'36A - สวนสยาม - อนุสาวรีย์ชัยฯ',
	'37 - แจงร้อน - มหานาค',
	'38 - ม.รามฯ2 - ม.จันทรเกษม',
	'39 - ตลาดไท - อนุสาวรีย์ชัยฯ',
	'40 - ลำสาลี - สายใต้เก่า',
	'42 - วงกลมเสาชิงช้า - ท่าพระ',
	'43 - ศึกษานารี 2 - เทเวศร์',
	'44 - แฮปปี้แลนด์ - ท่าเตียน',
	'45 - อู่ปู่เจ้าสมิงพราย - ท่าน้ำสี่พระยา',
	'46 - ม.รามฯ2 - รองเมือง',
	'47 - ท่าเรือคลองเตย - กรมที่ดิน',
	'48 - ม.รามฯ2 - วัดโพธิ์',
	'49 - หมอชิต 2 - หัวลำโพง',
	'50 - พระราม 7 - สวนลุมพินี',
	'51 - ปากเกร็ด - ม.เกษตรฯ',
	'52 - ปากเกร็ด - บางซื่อ',
	'53 - วงกลมรอบเมือง - เทเวศร์',
	'54 - วงกลมรอบเมือง - ห้วยขวาง',
	'56 - วงกลมกรุงธน - บางลำพู',
	'57 - วงกลมตลิ่งชัน - ธนบุรี',
	'59 - รังสิต - สนามหลวง',
	'60 - สวนสยาม - ปากคลองตลาด',
	'62 - สาธุประดิษฐ์ - อนุสาวรีย์ชัยฯ',
	'63 - อู่นครอินทร์ - อนุสาวรีย์ชัยฯ',
	'64 - ท่าน้ำนนทบุรี - สนามหลวง',
	'65 - วัดปากน้ำนนทบุรี - สนามหลวง',
	'66 - ศูนย์ราชการฯ - สายใต้ใหม่',
	'67 - เซ็นทรัลพระราม 3 - วัดเสมียนนารี',
	'68 - อู่แสมดำ - บางลำพู',
	'69 - ท่าอิฐ - อนุสาวรีย์ชัยฯ',
	'70 - ประชานิเวศน์ 3 - สนามหลวง',
	'71 - สวนสยาม - วัดธาตุทอง',
	'72 - ท่าเรือคลองเตย - เทเวศร์',
	'73 - ห้วยขวาง - สะพานพุทธ',
	'73ก - สวนสยาม - สะพานพุทธ',
	'74 -  ห้วยขวาง - คลองเตย',
	'75 - วัดพุทธบูชา - หัวลำโพง',
	'76 - อู่แสมดำ - ประตูน้ำ',
	'77 - เซ็นทรัลพระราม 3 - หมอชิต 2',
	'79 - พุทธมณฑลสาย2 - ราชประสงค์',
	'80 - วัดศรีนวลฯ - สนามหลวง',
	'80ก - ม.วปอ.11 - สนง.เขตบางกอกใหญ่',
	'81 - อ้อมน้อย - ปิ่นเกล้า',
	'82 - พระประแดง - บางลำพู',
	'84 - วัดไร่ขิง - กรุงธนบุรี',
	'84ก - ม.เอื้ออาทรศาลายา - วงเวียนใหญ่',
	'85 - แสมดำ - หัวลำโพง',
	'88 - มจธ.บางขุนเทียน - ลาดหญ้า',
	'89 - สวนผัก - เทคนิคกรุงเทพ',
	'90 - ท่าน้ำปทุมธานี - จตุจักร',
	'91 - ม.เศรษฐกิจ - สนามหลวง',
	'91ก - สนามหลวง2 - สนง.เขตบางกอกใหญ่',
	'92 - คลองตัน - รพ.สงฆ์',
	'93 - ม.นักกีฬา - ท่าน้ำสี่พระยา',
	'95 - บางเขน - ม.รามฯ',
	'95ก - รังสิต - บางกะปิ',
	'96 - มีนบุรี - หมอชิต 2',
	'96ก - มีนบุรี - แฮปปี้แลนด์',
	'97 - กระทรวงสาธารณสุข - รพ.สงฆ์',
	'98 - เมกาบางนา - ห้วยขวาง',
	'99 - ม.รามฯ - เทเวศร์',
	'101 - พุทธมณฑลสาย2 - วัดยายร่ม',
	'102 - ปากน้ำ - เซ็นทรัลพระราม 3',
	'104 - ปากเกร็ด - หมอชิต 2',
	'105 - มหาชัยเมืองใหม่ - คลองสาน',
	'107 - บางเขน - คลองเตย',
	'108 - ท่าพระ - รัชโยธิน',
	'109 - คลองกุ่ม - หัวลำโพง',
	'111 - วงกลมเจริญนคร - ตลาดพลู',
	'113 - มีนบุรี - หัวลำโพง',
	'114 - อู่นครอินทร์ - แยกลำลูกกา',
	'115 - สวนสยาม - สาทร',
	'116 - หนามแดง - สาทร',
	'117 - กทม.2 - ท่าน้ำนนทบุรี',
	'120 - มหาชัยเมืองใหม่ - คลองสาน',
	'122 - วัดเทพลีลา - จตุจักร',
	'123 - ลานแสดงช้างและฟาร์มจระเข้สามพราน - สนามหลวง',
	'124 - ศาลายา - สนามหลวง',
	'125 - ศาลายา - อนุสาวรีย์ชัยฯ',
	'126 - บางเขน - ม.รามฯ',
	'127 - บางบัวทอง - บางลำพู',
	'129 - บางเขน - สำโรง',
	'131 - มีนบุรี - ม.เอื้ออาทรสังฆสันติสุข',
	'132 - เคหะบางพลี - พระโขนง',
	'133 - เคหะบางพลี - พระโขนง',
	'134 - บัวทองเคหะ - หมอชิต 2',
	'136 - อู่คลองเตย - หมอชิต 2',
	'137 - วงกลมรัชดาภิเษก - ม.รามฯ',
	'138 - ราชประชา - หมอชิต 2',
	'139 - ม.รามฯ2 - อนุสาวรีย์ชัยฯ',
	'140 - แสมดำ - อนุสาวรีย์ชัยฯ',
	'141 - แสมดำ - จุฬาฯ',
	'142 - ปากน้ำ - แสมดำ',
	'143 - แฮปปี้แลนด์ - เทคโนฯลาดกระบัง',
	'145 - ปากน้ำ - หมอชิต 2',
	'146 - วงกลมบางแค - กาญจนาภิเษก',
	'147 - วงกลมเคหะธนบุรี - บางแค',
	'149 - พุทธมณฑลสาย2 - เอกมัย',
	'150 - ปากเกร็ด - บางกะปิ',
	'151 - มีนบุรี - ลาดพร้าว71',
	'156 - วงกลมสุคนธสวัสดิ์ - นวมินทร์',
	'157 - อ้อมใหญ่ - หมอชิต2',
	'165 - พุทธมณฑลสาย2 - สนง.เขตบางกอกใหญ่',
	'166 - เมืองทองธานี - อนุสาวรีย์ชัยฯ',
	'167 - เคหะธนบุรี - สีลม',
	'168 - สวนสยาม - อนุสาวรีย์ชัยฯ',
	'169 - วงกลมเคหะธนบุรี - วงเวียนใหญ่',
	'170 - อ้อมใหญ่ - หมอชิต2',
	'171 - เคหะธนบุรี - ม.นักกีฬา',
	'172 - เคหะธนบุรี - ม.นักกีฬา',
	'177 - บางบัวทอง - อนุสาวรีย์ชัยฯ',
	'178 - วงกลมเกษตรนวมินทร์ - ลาดพร้าว',
	'179 - พระราม 9 - พระราม 7',
	'180 - เซ็นทรัลพระราม3 - ม.รามฯ2',
	'182 - ม.รามฯ - จตุจักร',
	'183 - อ้อมใหญ่ - อนุสาวรีย์ชัยฯ',
	'185 - รังสิต - คลองเตย',
	'187 - คลองสาม - ท่าน้ำสี่พระยา',
	'189 - กระทุ่มแบน - สนง.เขตบางกอกใหญ่',
	'191 - เคหะคลองจั่น - กระทรวงพาณิชย์',
	'195 - กรมศุลกากร - เดอะมอลล์ท่าพระ',
	'197 - วงกลมมีนบุรี - หทัยราษฎร์',
	'203 - ท่าอิฐ - สนามหลวง',
	'204 - ห้วยขวาง - ท่าน้ำราชวงศ์',
	'205 - กรมศุลกากร - เดอะมอลล์ท่าพระ',
	'206 - ประเวศ - ม.เกษตรฯ',
	'207 - ม.รามฯ2 - ม.รามฯ',
	'501 - มีนบุรี - หัวลำโพง',
	'502 - มีนบุรี - อนุสาวรีย์ชัยฯ',
	'503 - รังสิต - สนามหลวง',
	'504 - รังสิต - สะพานกรุงเทพ',
	'505 - ปากเกร็ด - สวนลุมพินี',
	'507 - ปากน้ำ - สายใต้ใหม่',
	'508 - ปากน้ำ - ท่าราชวรดิฐ',
	'509 - พุทธมณฑลสาย2 - หมอชิต 2',
	'510 - มธ.ศูนย์รังสิต - อนุสาวรีย์ชัยฯ',
	'511 - ปากน้ำ - สายใต้ใหม่',
	'514 - มีนบุรี - สีลม',
	'515 - มทร.ศาลายา - อนุสาวรีย์ชัยฯ',
	'516 - บัวทองเคหะ - เทเวศร์',
	'517 - หมอชิต2 - เทคโนฯลาดกระบัง',
	'519 - สวนสยาม - เซ็นทรัลพระราม3',
	'520 - ตลาดไท - มีนบุรี',
	'522 - รังสิต - อนุสาวรีย์ชัยฯ',
	'524 - หลักสี่ - วัดโพธิ์',
	'525 - สวนสยาม - ม.เธียรทอง3',
	'526 - สวนสยาม - หนองจอก',
	'528 - ไทรน้อย - อนุสาวรีย์ชัยฯ',
	'529 - แสมดำ - อนุสาวรีย์ชัยฯ',
	'536 - ปากน้ำ - หมอชิต 2',
	'538 - มทร.ธัญบุรี - รพ.สงฆ์',
	'539 - อ้อมน้อย - อนุสาวรีย์ชัยฯ',
	'542 - วงกลมปิ่นเกล้า - อนุสาวรีย์ชัยฯ',
	'543 - บางเขน - ลำลูกกาคลอง7',
	'543ก - บางเขน - ท่าน้ำนนทบุรี',
	'545 - ม.รามฯ - ท่าน้ำนนทบุรี',
	'547 - ม.เอื้ออาทรศาลายา - สวนลุมพินี',
	'553 - สุวรรณภูมิ - ปากน้ำ',
	'554 - รังสิต - สุวรรณภูมิ',
	'555 - รังสิต - สุวรรณภูมิ',
	'556 - วัดไร่ขิง - อนุสาวรีย์ประชาธิปไตย',
	'558 - สุวรรณภูมิ - เคหะธนบุรี',
	'710 - วงกลมราชพฤกษ์ - อรุณอัมรินทร์',
	'720 - วงกลมกัลปพฤกษ์ - พระราม2',
	'751 - ปากเกร็ด - บางหว้า',
	'A1 - ดอนเมือง - หมอชิต 2',
	'A2 - ดอนเมือง - อนุสาวรีย์ชัยฯ'
]