const Afiliate = require(`../../models/afiliate`);
const PhoneTag = require(`../../models/phoneTag`);

exports.addData = async (req, res) => {
    try {
        const { email, areaCode, number, extension, current, state, city, zipcode, fax, description } = req.body;

        //create affiliate
        let afilliate;
        afilliate = new Afiliate({
            mail: email,
            phone: [
                {
                    arreaCode: areaCode,
                    number,
                    extension,
                    current,
                    tag: "Home",
                },
            ],
            address: [
                {
                    state,
                    city,
                    zipcode,
                    fax,
                    description,
                },
            ],
        });

        await afilliate.save();

        res.json(afilliate);

    } catch (error) {
        console.log(`${error}`);
        res.json({ msg: `Server error ${error}` })
    }
};
