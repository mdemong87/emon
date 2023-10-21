import { smsSend } from "../../halper/bulksms";

//handle post method
export async function POST(req) {

    try {
        const bodydata = await req.json();

        // Call smsSend function and await its result
        const smsResponse = await smsSend(bodydata);

        if (smsResponse.status === "ok") {
            return Response.json({
                status: 200,
                success: true,
                message: "Form Send Successfully"
            });
        } else {
            return Response.json({
                status: 500,
                success: false,
                message: "Form send failed"
            })
        }

    } catch (error) {
        return Response.json({
            status: 500,
            success: false,
            message: "There was a server side problem"
        })
    }
}