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
            <Paper elevation={3} sx={{ width: "65%", height: "60%", marginBottom: "5%", display: "flex", flexDirection: "column", gap: "1%", justifyContent: "center", alignItems: "center" }}>
                <Typography variant="h4" component="h4" sx={{ marginBottom: "1%" }}>
                        Profile
                </Typography>
                {/* use nullish coalescing operator to check if value on left is null or undefined and if so use the value on the right*/}
                <img src={session.user?.image ?? ""} alt={`${session.user?.name} Profile Picture`} className="w-[20%]"/>
                <Typography variant="h5" component="h4">
                    { session.user?.name }
                </Typography>
                <Typography variant="h5" component="h4">
                    { session.user?.email }
                </Typography>
            </Paper>
        </Box>
    )
}