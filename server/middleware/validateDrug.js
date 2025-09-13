// middleware/validateDrug.js
module.exports = function (req, res, next) {
    const { name, dosage, card, pack, perDay } = req.body;

    // a. Name has length > 5
    if (!name || name.length <= 5) {
        return res.status(400).send({ message: "Name must be longer than 5 characters" });
    }

    // b. Dosage format: XX-morning,XX-afternoon,XX-night
    // Ví dụ hợp lệ: "10-morning,20-afternoon,30-night"
    const dosagePattern = /^\d{1,2}-morning,\d{1,2}-afternoon,\d{1,2}-night$/;
    if (!dosagePattern.test(dosage)) {
        return res.status(400).send({ message: "Dosage format is invalid. Example: 10-morning,20-afternoon,30-night" });
    }

    // c. Card > 1000
    if (!card || isNaN(card) || Number(card) <= 1000) {
        return res.status(400).send({ message: "Card must be greater than 1000" });
    }

    // d. Pack > 0
    if (!pack || isNaN(pack) || Number(pack) <= 0) {
        return res.status(400).send({ message: "Pack must be greater than 0" });
    }

    // e. PerDay > 0 and < 90
    if (!perDay || isNaN(perDay) || Number(perDay) <= 0 || Number(perDay) >= 90) {
        return res.status(400).send({ message: "PerDay must be greater than 0 and less than 90" });
    }

    // Nếu tất cả điều kiện ok -> chuyển tiếp
    next();
};
