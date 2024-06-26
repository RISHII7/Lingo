import { Button } from "@/components/ui/button"

const ButtonsPage = () => {
    return (
        <div className="p-4 space-y-4 flex flex-col items-center">
            <Button>Default</Button>
            <Button variant="primary">
                Primary
            </Button>
            <Button variant="primaryOutline">
                Primary Outline
            </Button>
            <Button variant="secondary">
                Secondary
            </Button>
            <Button variant="secondaryOutline">
                Secondary Outline
            </Button>
            <Button variant="danger">
                danger
            </Button>
            <Button variant="dangerOutline">
                danger Outline
            </Button>
            <Button variant="super">
                Super
            </Button>
            <Button variant="superOutline">
                Super Outline
            </Button>
            <Button variant="ghost">
                Ghost
            </Button>
            <Button variant="sidebar">
                sidebar
            </Button>
            <Button variant="sidebarOutline">
                sidebar Outline
            </Button>
        </div>
    )
}

export default ButtonsPage