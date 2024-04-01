function shortcut(s1, s2) {
  // your code here
	//for (let i = 0; i < s1.length; i++) {
	//	for (let j = 0; j < s2.length; j++) {
	//		if (s1[i] != ' ') {
	//			return s1[i] + s2[j];
	//		}
	//		else{
	//			return ' ';
	//		}
	//		else if (s2[j] != ' ') {
	//			return s1[i] + s2[j];
	//		}
	//		else{
	//			return ' ';
	//		}
	//	}
	//}

	if (s1 && s2) {
        return s1[0] + s2[0];
    } else {
        return '';
    }
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
