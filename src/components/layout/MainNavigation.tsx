import { useTheme } from "../../hooks/useTheme";
import ToggleButton from "../ui/ToggleButton";
import classes from "./MainNavigation.module.css";
import { Moon, Sun } from 'lucide-react';

export default function MainNavigation() {
    const {theme, changeTheme} = useTheme();
    const iconProps={size:16, color:"#FBBF24", strokeWidth:1};
    return (
        <header className={classes.header}>
            <ToggleButton
                name="mode"
                icon={theme==='dark'?<Sun {...iconProps} />:<Moon {...iconProps} />}
                onChange={changeTheme}
                checked={theme==='dark'} />
        </header>
    );
} 