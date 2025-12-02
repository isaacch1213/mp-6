import { Box, Paper, Typography } from "@mui/material"
import { auth } from "@/auth"
import { redirect } from "next/navigation";

export default async function Page() {
    const session = await auth();

    if (!session) {
        redirect("/");
    }

    return (
        <Box sx={{ width: "100vw", height: "90vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Paper elevation={3} sx={{ width: "65%", height: "60%", marginBottom: "5%", display: "flex", flexDirection: "column", gap: "2%", justifyContent: "center", alignItems: "center" }}>
                {/* use nullish coalescing operator to check if value on left is null or undefined and if so use the value on the right*/}
                <img src={session.user?.image ?? ""} alt={`${session.user?.name} Profile Picture`} className="w-[100%] max-w-[20%]"/>
                <Typography>
                    { session.user?.name }
                </Typography>
                <Typography>
                    { session.user?.email }
                </Typography>
            </Paper>
        </Box>
    )
}