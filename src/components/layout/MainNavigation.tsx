import ToggleButton from "../ui/ToggleButton";
import classes from "./MainNavigation.module.css";
import { Moon, Sun } from 'lucide-react';
type MainNavigationProps = {
    onSetMode: () => void,
    toggleIsChecked: boolean
};

export default function MainNavigation({ onSetMode, toggleIsChecked }: MainNavigationProps) {
    const iconProps={size:16, color:"#FBBF24", strokeWidth:1};
    return (
        <header className={classes.header}>
            <ToggleButton
                name="mode"
                icon={toggleIsChecked?<Sun {...iconProps} />:<Moon {...iconProps} />}
                onChange={onSetMode}
                checked={toggleIsChecked} />
        </header>
    );
} 