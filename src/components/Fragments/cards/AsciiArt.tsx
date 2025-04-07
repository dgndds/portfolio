import Container from "./Container";
import { twMerge } from "tailwind-merge";

const AsciiArt = ({ className }: { className?: string }) => {

    return (
        <Container className={twMerge(className)}>
            <span className="text-white text-center text-xs leading-tight" style={{ fontSize: '8px' }}>
                ___====-_  _-====___<br />
                _--^^^#####// \\#####^^^--_<br />
                _-^##########// ( ) \\##########^-_<br />
                -############// |\^^/| \\############-<br />
                _/############// (@::@) \\############\_<br />
                /#############(( \\// ))#############\<br />
                -###############\\ (oo) //###############-<br />
                -#################\\ /VV\\ //#################-<br />
                -###################\\/ \//###################-<br />
                _#/|##########/\######( /\ )######/\##########|\#_<br />
                |/ |#/\#/\#/\/ \#/\##\ | | /##/\#/ \/\#/\#/\#| \|<br />
                ` |/ V V ` V \#\| | | |/#/ V ' V V \| '<br />
                ` ` ` ` / | | | | \ ' ' '<br />
                ( | | | | )<br />
                __\ | | | | /__<br />
                (vvv(VVV)(VVV)vvv)<br />
            </span>
        </Container>
    );

};

export default AsciiArt;
















/**

 */