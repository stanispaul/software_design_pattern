import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from "sonner"

const Login = () => {
    return (
        <div className='h-full w-full flex justify-center items-center'>
            <Card className="w-1/4">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        Enter your email below to login
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="user@iamneo.ai" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" placeholder="******" />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button
                        variant="outline"
                        onClick={() =>
                            toast.success("Event has been created")
                        }
                    >
                        Login
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Login