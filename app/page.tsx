import { Box, Button, Paper, Typography } from "@mui/material";
import { signIn } from "@/auth";

export default function Home() {
    return (
        <Box sx={{ width: "100vw", height: "90vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Paper elevation={3} sx={{ width: "65%", height: "60%", marginBottom: "5%", display: "flex", flexDirection: "column", gap: "20%"}}>
                <Typography variant="h3" component="h1" sx={{ width: "100%", textAlign: "center", marginTop: "5%" }}>
                    GitHub OAuth
                </Typography>
                <form
                    action={async () => {
                        "use server";
                        await signIn("github", {redirectTo: "/profile" });
                    }}
                >
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                        <Button type="submit" variant="contained" sx={{ width: "60%" }}>
                            Sign in with GitHub
                        </Button>
                    </Box>
                </form>
            </Paper>
        </Box>
    );
}