import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, ChartLineIcon, Plus, Search } from "lucide-react"
import { Settings } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

const Home = () => {
    return (
        <>
            <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/6">
                <div className="flex justify-between items-center p-2">
                    <div className="flex items-center gap-2">
                        <h1>📚 ULi</h1>
                        <Badge variant="secondary">내 서재</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon">
                            <Search className="h-4 w-4" />
                            <span className="sr-only">검색</span>
                        </Button>
                    </div>
                </div>
            </header>
            <Separator />

            <div className="p-2">Home</div>

            <nav className="fixed bottom-0 border-t bg-background w-full">
                <div className="grid grid-cols-4">
                    <Button variant="ghost" className="flex-col h-auto gap-1" asChild>
                        <Link href="/" >
                            <BookOpen size={4} />
                            <span>내 서재</span>
                        </Link>
                    </Button>
                    <Button variant="ghost" className="flex-col h-auto gap-1" asChild>
                        <Link href="/" >
                            <Plus size={4} />
                            <span>추가</span>
                        </Link>
                    </Button>
                    <Button variant="ghost" className="flex-col h-auto gap-1" asChild>
                        <Link href="/" >
                            <ChartLineIcon size={4} />
                            <span>통계</span>
                        </Link>
                    </Button>
                    <Button variant="ghost" className="flex-col h-auto gap-1" asChild>
                        <Link href="/" >
                            <Settings size={4} />
                            <span>설정</span>
                        </Link>
                    </Button>
                </div>
            </nav>
        </>
    )
}

export default Home
