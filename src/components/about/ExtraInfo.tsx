import Terminal from "../Fragments/Terminal";

const ExtraInfo = () => {
  return (
    <div className="h-full">
      <Terminal title={"Coming Soon"}>
        <pre>
          {`
        a88888b.                    oo                      .d88888b                             
      d8'    88                                             88.    "'                            
      88        .d8888b. 88d8b.d8b. dP 88d888b. .d8888b.     Y88888b. .d8888b. .d8888b. 88d888b. 
      88        88'   88 88' 88' 88 88 88'   88 88'   88           8b 88'   88 88'   88 88'   88 
      Y8.   .88 88.  .88 88  88  88 88 88    88 88.  .88    d8'   .8P 88.  .88 88.  .88 88    88 
        Y88888P' 88888P' dP  dP  dP dP dP    dP  8888P88     Y88888P   88888P'  88888P' dP    dP 
                                                     .88                                         
                                                  d8888P
        `}
        </pre>
      </Terminal>
    </div>
  );
};

export default ExtraInfo;
