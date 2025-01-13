import React from "react";
import { StyleSheet,Text,View,TouchableOpacity } from "react-native";
export default class D31 extends React.Component{
    //code
    constructor(){
        super();
        //khai bao cac hang
        this.operations = ['DEL','+','-','*','/'];
        this.state={
            resultText:"",//bien luu ket qua
            calculationText:"",//bien thuc hien bieu thuc tinh toan
        };
    }
    //ham nhan button
    pressButton(text){
        if(text==="="){
            return this.calculationResult(this.state.resultText)
        } 
        else if(text==='DEL'){
            this.operate('DEL');//goi ham operate de xu ly DEL
        }
        else {
            this.setState({
                resultText: this.state.resultText + text,
            });
        }
    }
    //ham tinh toan ket qua
    calculationResult(text){
        this.setState({
            calculationText: eval(text),//tinh toan gia tri bieu thuc
        });
    }
    //ham xu ly phep tinh
    operate(operation){
            switch(operation){
                case 'DEL':    
                    let text = this.state.resultText.split('');//pha vo chuoi
                    text.pop();//xoa bo 1 thanh phan cuoi cung
                    this.setState({
                        resultText: text.join(''),//join lai thanh chuoi
                    });
                    break;
                case '+':
                case '-':
                case '*':
                case '/':
                    this.setState({
                        resultText: this.state.resultText+operation,//noi chuoi
                    });
                    break;
            }
            
    }
    //layout
    render(){
        return(
            <View style={styles.container}>
                {/* result */}
                <View style={styles.resultA}>
                    <Text style={styles.resultText}>{this.state.resultText}</Text>
                </View>
                {/* caculation */}
                <View style={styles.calulation}>
                    <Text style={styles.result}>{this.state.calculationText}</Text>
                </View>
                {/* button */}
                <View style={styles.buttons}>
                    {/* number1 */}
                    <View style={styles.number1}>
                        <TouchableOpacity style={styles.btn} key={1} onPress={()=>this.pressButton(1)}><Text>1</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btn} key={4} onPress={()=>this.pressButton(4)}><Text>4</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btn} key={7} onPress={()=>this.pressButton(7)}><Text>7</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btn} key={'.'} onPress={()=>this.pressButton('.')}><Text>.</Text></TouchableOpacity>
                    </View>
                    {/* number2 */}
                    <View style={styles.number2}>
                        <TouchableOpacity style={styles.btn} key={2} onPress={()=>this.pressButton(2)}><Text>2</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btn} key={5} onPress={()=>this.pressButton(5)}><Text>5</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btn} key={8} onPress={()=>this.pressButton(8)}><Text>8</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btn} key={0} onPress={()=>this.pressButton(0)}><Text>0</Text></TouchableOpacity>
                    </View>
                    {/* number3 */}
                    <View style={styles.number3}>
                        <TouchableOpacity style={styles.btn} key={3} onPress={()=>this.pressButton(3)}><Text>3</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btn} key={6} onPress={()=>this.pressButton(6)}><Text>6</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btn} key={9} onPress={()=>this.pressButton(9)}><Text>9</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btn} key={'='} onPress={()=>this.pressButton('=')}><Text>=</Text></TouchableOpacity>
                    </View>
                    {/* operator */}
                    <View style={styles.operations}>
                    <TouchableOpacity style={styles.btn} key={'+'} onPress={()=>this.pressButton('+')}><Text>+</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btn} key={'-'} onPress={()=>this.pressButton('-')}><Text>-</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btn} key={'*'} onPress={()=>this.pressButton('*')}><Text>*</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btn} key={'/'} onPress={()=>this.pressButton('/')}><Text>/</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btn} key={'DEL'} onPress={()=>this.pressButton('DEL')}><Text>DEL</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'column',
    },
    // -------result-------
    resultA: {
        flex:2,
        alignItems:'flex-end',
        justifyContent:'space-around',
        backgroundColor:'green',
    },
    calulation:{
        flex:1,
        alignItems:'flex-end',
        justifyContent:'space-around',
        backgroundColor:'yellow',
    },
    buttons: {
        flex:7,
        backgroundColor:'#2c2c2c',
        flexDirection:'row',
    },
    // ---chia phan button
    operations:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#a1a1a1',
        justifyContent:'space-around',
        alignItems:'stretch',
    },
    //---chia phan numbers
    numbers:{
        flex:3,
        flexDirection:'row',
        backgroundColor:'#4f4f4f',
        justifyContent:'space-around',
        alignItems:'stretch',
    },
    number1:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'stretch',
        backgroundColor:'#b1b1b1',
    },
    number2:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'stretch',
        backgroundColor:'#b3b3b3',
    },
    number3:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'stretch',
        backgroundColor:'#b5b5b5',
    },
    //------ dinh dang cho cac button
    btn:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    result:{
        fontSize:30,
        fontWeight:'bold',
    },

});