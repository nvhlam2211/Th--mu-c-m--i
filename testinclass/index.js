document.getElementById("submit").addEventListener('click', validateForm);
	function validateForm() {
    var email = document.getElementById("email").value;

    var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    if (!email.match(emailRegex)) {
        alert("Vui lòng điền địa chỉ email hợp lệ.");
        return false;
    }

    var comment = document.getElementById("com").value;
    var rating = document.getElementById("rate").value;

    if (email === "") {
        alert("Vui lòng điền địa chỉ email.");
        return false;
    }

    if (comment === "") {
        alert("Vui lòng không để trống bình luận.");
        return false;
    }

    if (rating === "" || isNaN(rating) || rating < 1 || rating > 5) {
        alert("Vui lòng điền đúng giá trị rating từ 1 đến 5.");
        return false;
    }

    return true;
	}