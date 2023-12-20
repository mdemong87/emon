export const smsSend = async (bodydata) => {
    try {

        const response = await fetch(`${process.env.NEXT_PUBLIC_BULK_API_URL}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "customer_id": process.env.NEXT_PUBLIC_BULK_CUSTOMER_ID,
                "api_key": process.env.NEXT_PUBLIC_BULK_API_KEY,
                "message": `
                Hello Emon!
                This sms come from your Website.
                Sender Name: ${bodydata.name}
                Sender Email : ${bodydata.email}
                Subject : ${bodydata.subject}
                ${bodydata.message}
                `,
                "mobile_no": process.env.NEXT_PUBLIC_BULK_PHONE_NUMBER
            })
        })

        const res = await response.json();
        return res;
    } catch (error) {
        return error;
    }
}